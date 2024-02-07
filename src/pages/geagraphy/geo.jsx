import { Box,useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import {data}from "./data"
import { geo } from './world_countries'

const Geo = ({isDashbord=false}) => {
    const theme=useTheme();
  return (
    <Box sx={{height:isDashbord?"400px":"85vh",borderRadius:"5px",border:isDashbord?null:`1px solid ${theme.palette.text.primary}`}}>
      <ResponsiveChoropleth
    data={data}
    features={geo.features}
    projectionScale={isDashbord?80:180}
    theme={{
       
      text: {
        fontSize: 11,
        fill: theme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      axis: {
        domain: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 12,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        ticks: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      grid: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
      },
      legends: {
        title: {
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        ticks: {
          line: {},
          text: {
            fontSize: 10,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      annotations: {
        text: {
          fontSize: 13,
          fill: theme.palette.text.primary,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        link: {
          stroke: "#000000",
          strokeWidth: 1,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        outline: {
          stroke: "#000000",
          strokeWidth: 2,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        symbol: {
          fill: "#000000",
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
      },
      tooltip: {
        container: {
          background: theme.palette.background.default,
          fontSize: 12,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
      },
    }}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[ 0, 1000000 ]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[ 0.5, 0.5 ]}
    projectionRotation={[ 0, 0, 0 ]}
    enableGraticule={false}
    graticuleLineColor="#dddddd"
    borderWidth={1.1}
    borderColor="#FFF"

    legends={
        isDashbord?[]:
        [
        {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: theme.palette.text.secondary,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: theme.palette.text.primary,
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/></Box>
  )
}

export default Geo