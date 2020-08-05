// IMPORTS
// --------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { GitCommit } from '@styled-icons/feather';

// Styled Components
import { TooltipStyles } from './styles';

// TYPES
// --------------------------------------------------------
export interface TooltipProps {
  model: {
    afterBody: Array<any>;
    beforeBody: Array<any>;
    body: Array<{
      after: Array<any>;
      before: Array<any>;
      lines: Array<string | null>;
    }>;
    dataPoints: Array<{
      datasetIndex: number;
      index: number;
      label: string;
      value: string | number | null;
      x: number;
      y: number;
      xLabel: string | number | null;
      yLabel: string | number | null;
    }>;
    caretPadding?: number;
    footer: Array<any>;
    labelColors: Array<any>;
    labelTextColors: Array<string | null>;
    title: Array<string | null>;
    xPadding: number;
    yPadding: number;
    xAlign: string;
    yAlign: string;
    bodyFontColor: string;
    bodyFontSize: number;
    bodySpacing: number;
    titleFontColor: string;
    titleFontSize: number;
    titleSpacing: number;
    titleMarginBottom: number;
    footerFontColor: string;
    footerFontSize: number;
    footerSpacing: number;
    footerMarginTop: number;
    caretSize: number;
    cornerRadius: number;
    backgroundColor: string;
    opacity: number;
    legendColorBackground: string;
    displayColors: boolean;
    borderColor: string;
    borderWidth: number;
    x: number;
    y: number;
    width: number;
    height: number;
    caretX: number;
    caretY: number;
    _bodyFontFamily: string;
    _bodyFontStyle: string;
    _bodyAlign: string;
    _titleAlign: string;
    _titleFontFamily: string;
    _titleFontStyle: string;
    _footerFontFamily: string;
    _footerFontStyle: string;
    _footerAlign: string;
  };
  history?: Array<any>;
  position?: DOMRect;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Tooltip
 * @param {Object} props component props
 * @returns {JSX} React compoennt
 */
const Tooltip: React.FC<TooltipProps> = (props) => {
  // State / Props
  const [data, setData] = useState<any>(null);
  // Hooks
  /**
   * When tooltip model data is received format it
   */
  useEffect(() => {
    const getPointData = (body?: Array<any>) => {
      if (body && body.length > 0) {
        // get name
        const dataPoint = props.history?.find(
          (i: any) => i.id === body[0]?.lines?.[0].split(':')[0],
        )?.logs[`${props?.model?.title?.[0] ?? ''}`];

        return dataPoint;
      }
    };

    setData({
      show: props?.model?.opacity === 1,
      top: Math.ceil(
        (props?.position?.top ?? 0) +
          (window?.pageYOffset ?? 0) +
          (props?.model?.caretY ?? 0),
      ),
      left: Math.ceil(
        (props?.position?.left ?? 0) +
          (window?.pageXOffset ?? 0) +
          (props?.model?.caretX ?? 0),
      ),
      point: getPointData(props?.model?.body),
      xAlign: props?.model?.xAlign,
      yAlign: props?.model?.yAlign,
    });
  }, [props]);

  // Render
  if (data === null) return <></>;

  return (
    <TooltipStyles
      top={data.top}
      left={data.left}
      show={data.show}
      xAlign={data.xAlign}
      yAlign={data.yAlign}
    >
      {data.show && (
        <>
          <span>Week of {data?.point?.date ?? 'Unknown'}</span>
          <strong>
            <GitCommit strokeWidth={2} />
            {data?.point?.commits?.length ?? '0'} Commit
            {data?.point?.commits?.length !== 1 ? 's' : ''}
          </strong>
        </>
      )}
    </TooltipStyles>
  );
};

// EXPORTS
// --------------------------------------------------------
export default Tooltip;
