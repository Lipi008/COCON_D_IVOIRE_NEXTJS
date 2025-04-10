import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1600')",
          filter: "brightness(0.3)",
        }}
      />
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Quarter - Real Estate HTML Template + RTL</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <span>11+ Home Pages</span>
          <span className="text-primary-DEFAULT">|</span>
          <span>30+ Inner Pages</span>
          <span className="text-primary-DEFAULT">|</span>
          <span>05+ Header Variation</span>
        </div>
        <Button className="bg-primary-DEFAULT hover:bg-primary-dark">VIEW DEMOS</Button>
      </div>
    </div>
  )
}

export default Hero
