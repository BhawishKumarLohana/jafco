"use client"
import AboutBrief from "./components/aboutBrief";
import Navbar from "./components/navbar";
import ZoomFramer from "./components/ZoomFramer";
import BuildingBlocks3D from "@/app/components/buildingBlocks"
import BuildingBlockLeft from "@/app/components/buildBlockLeft";
import BuildingBlockRight from "@/app/components/buildBlockRight"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ZoomFramer/>
      <AboutBrief/>
      <BuildingBlocks3D/>
      <BuildingBlockLeft
        image="/Parking.jpg"
        title="Elegant Parking Spaces"
        subtitle="Campus Park"
        description='Designed for modern families with ample sunlight and airflow'
        note="(design in progress)"
      />
      <BuildingBlockRight 
      image="/Parking.jpg"
      title="Elegant"
      subtitle="sdsadasdad"
      description="asdasdas"
      note="asdsa"
      />

    </div>
  );
}
