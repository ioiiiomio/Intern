import { LeafyGreen, TrendingUp } from "lucide-react"
import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import { ChartConfig, ChartContainer } from './Chart'
import { faker, Faker } from "@faker-js/faker"

export const description = "A radial chart with text"

const chartConfig = {
  credits: {
    label: "Credits",
  },
} satisfies ChartConfig



export function ChartRadialText({ value = faker.number.int({min: 0, max: 100}) }: { value?: number }) {
  const chartData = [
  {
    name: "Credits",
    credits: value,
    fill: "#4CA436",
  }, 
]

const isGoodCredit = value > 49;

return (


    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[232px] w-[216px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-44.74 + 270}
            endAngle={-44.74}
            innerRadius={90}
            outerRadius={160}
            barSize={24}
          >
            {/* gradient */}
            <defs>
              <linearGradient id="radialGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E1FFD7" />
                <stop offset="100%" stopColor="#DCECD700" />
              </linearGradient>
            </defs>

            <PolarGrid gridType="circle" radialLines={false} stroke="none" />

            <RadialBar
              dataKey="credits"
              background={{ fill: "url(#radialGradient)" }}
              cornerRadius={10}
            />

            
            <PolarAngleAxis tick={false} tickLine={false} axisLine={false} domain={[0, 100]} type="number" angleAxisId={0} />
              
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="{goodCredit}"
                        
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-4xl fill-text_color_secondary font-bold"
                        >
                          <tspan>{chartData[0].credits.toLocaleString()}%</tspan>
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Кредиты
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}