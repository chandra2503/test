const defaultProjects = [
{
    id: 1,
    title: "PRO#0001: IoT based Underground Cable Fault Detection",
    category: "Major Project",
    image: "image/PRO0001_UGC.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS"],
    desc: "An automated underground cable fault detection system using ESP32 microcontrollers. Fault data is transmitted in real time to a cloud database and visualized through a dynamic web dashboard.",
    difficulty: "Advanced",
    duration: "6 Weeks"
},
{
    id: 2,
    title: "PRO#0002: IoT based Hybrid Energy Vehicle",
    category: "Major Project",
    image: "image/PRO0002_Hybride_Energy_Car.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS"],
    desc: "An IoT-based hybrid energy system that automatically switches between solar and wind energy based on weather conditions using ESP32. Data is monitored and displayed on a real-time web dashboard.",
    difficulty: "Advanced",
    duration: "4 Weeks"
},
{
    id: 3,
    title: "PRO#0003: IOT Based Street Light control and home fire safety system",
    category: "Major Project",
    image: "image/PRO0003_Street_light_with_flame_detector.jpg",
    tech: ["Arduino", "Sensors", "C++"],
    desc: "An IOT Based Street Light control and home fire safety system using arduino detect the vehicle movement automatic street light working also home safety system activate while flame detected and extingwish the fire automatically.",
    difficulty: "Advanced",
    duration: "8 Weeks"
},
{
    id: 4,
    title: "PRO#0004: Long Distance Communication via LoRa",
    category: "Major Project",
    image: "image/PRO0004_Lora_Communication.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS", "Bluetooth", "Lora"],
    desc: "A long-distance communication system using LoRa technology with ESP32. Data is transmitted from a mobile device via Bluetooth to LoRa and received, decoded, and displayed on another device.",
    difficulty: "Advanced",
    duration: "4 Weeks"
},
{
    id: 5,
    title: "PRO#0005: IoT based Smart Blind Glass",
    category: "Major Project",
    image: "image/PRO0005_Blind_Glass.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS", "GPS"],
    desc: "A smart assistive device for visually impaired individuals. It detects obstacles and alerts the user while also sending SOS messages with location details to a predefined contact using ESP32.",
    difficulty: "Advanced",
    duration: "6 Weeks"
},
{
    id: 6,
    title: "PRO#0006: School Hand Garden",
    category: "Mini Project",
    image: "image/PRO0006_School_Gurden.jpg",
    tech: ["Hand Craft"],
    desc: "A creative handmade garden model built using paper craft materials for school display and decoration purposes.",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{
    id: 7,
    title: "PRO#0007: Solar Mobile Charger",
    category: "Mini Project",
    image: "image/PRO0007_Solar_Charger.jpg",
    tech: ["Electronic Circuit"],
    desc: "An automatic solar-powered mobile charger with voltage and current protection designed using basic electronic circuits.",
    difficulty: "Mid Level",
    duration: "1 Week"
},
{
    id: 8,
    title: "PRO#0008: E-Waste Management System",
    category: "Mini Project",
    image: "image/PRO0008_Waste_Management.jpg",
    tech: ["ESP32 / C++"],
    desc: "An automated dry and wet waste segregation system using ESP32 to promote efficient e-waste management.",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{
    id: 9,
    title: "PRO#0009: Auto Fire Exit System",
    category: "Mini Project",
    image: "image/PRO0009_Fire_Exit.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS"],
    desc: "An automatic fire exit system that detects fire and opens doors instantly to ensure safety in areas like game zones and buildings.",
    difficulty: "Low Level",
    duration: "1 Weeks"
},
{
    id: 10,
    title: "PRO#0010: IoT Based Home Automation",
    category: "Mini Project",
    image: "image/PRO0010_Home_Automation.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS", "Blynk"],
    desc: "A smart home automation system that allows remote control of appliances using the Blynk app. Real-time data is monitored and displayed on a web dashboard.",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{	
	id: 11,
    title: "PRO#0011: IoT Based Servilence Robo Vehicle",
    category: "Major Project",
    image: "image/PRO0011_Robo_Servilence_Vehicle.jpg",
    tech: ["ESP32 / C++", "HTML", "CSS", "JS", "ESP32 camera", "GPS", "Lora"],
    desc: "A IoT Based Servilence Robo Vehicle that will control with Lora Remote that will work approx 2km range, also Wifi device to streamimg the live video also GPS location",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{
	id: 12,
    title: "PRO#0012: IoT Based Fire fitting Vehicle",
    category: "Major Project",
    image: "image/PRO0012_Fire_Fighting_Robo_with_auto.jpg",
    tech: ["Sensor", "ESP32 / C++", "HTML", "CSS", "JS"],
    desc: "A IoT Based Fire fitting Vehicle that will find the fire automatic and extingwish the fire from water",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{	
	id: 13,
    title: "PRO#0013: Smart Irrigation System",
    category: "Mini Project",
    image: "image/PRO0013_Smart_Irrigation_System.jpg",
    tech: ["Sensor", "Arduino", "C++"],
    desc: "A Smart Irrigation System that with check the moisture in soil and detected the moisture level and turned ON the water pump automatically.",
    difficulty: "Low Level",
    duration: "1 Weeks"
},
{	
	id: 14,
    title: "PRO#0014: Smart Railway Gate Control System",
    category: "Major Project",
    image: "image/PRO0014_Smart_Railway_Gate.jpg",
    tech: ["Sensor", "ESP32 / C++", "HTML", "CSS", "JS"],
    desc: "A Smart Railway Gate Control System that will check the rail movement and close the railway gate automatic and send the status to control room using webapplication.",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{
	id: 15,
    title: "PRO#0015: Smart Vehicle Safety System",
    category: "Major Project",
    image: "image/PRO0015Vehical_Safety_System_gps_telegram.jpg",
    tech: ["Sensor", "ESP32 / C++", "GPS", "HTML", "CSS", "JS", "Telegram"],
    desc: "A Smart Vehicle Safety System that will check the vehicle abnormal condition using gyrosensor and send the live map location to perent mobile phone",
    difficulty: "Mid Level",
    duration: "2 Weeks"
},
{
	id: 16,
    title: "PRO#0016: Smart Garbage Checking and intimation system",
    category: "Major Project",
    image: "image/PRO0016_Smart_garbage_checking_GSM.jpg",
    tech: ["Sensor", "ESP32 / C++", "GPS", "GSM"],
    desc: "A Smart Garbage Checking and intimation system will check the level of filled garbage and intimate the concerned person with location via GPS system",
    difficulty: "Mid Level",
    duration: "2 Weeks"
}
	
];