'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSectionComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                John Doe
              </h1>
              <p className="text-xl text-muted-foreground">
                Data Analyst & Visualization Expert
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Transforming complex data into actionable insights. Specializing in statistical analysis, 
              data visualization, and predictive modeling to drive business decisions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
              <Image
                src="/placeholder.svg?height=350&width=350"
                alt="John Doe"
                className="rounded-full object-cover"
                fill
              />
              <div className="absolute -right-24 top-0 w-20 h-20 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Tool 1"
                  width={80}
                  height={80}
                />
              </div>
              <div className="absolute -right-24 top-24 w-20 h-20 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Tool 2"
                  width={80}
                  height={80}
                />
              </div>
              <div className="absolute -right-24 top-48 w-20 h-20 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Tool 3"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}