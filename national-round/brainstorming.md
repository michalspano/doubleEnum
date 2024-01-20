---
title: Hackaton - ActInSpace; General Notes
author: DoublEnum Group
date: 2022-11-18, 2022-11-19
papersize: a4
fontsize: 12pt
colorlinks: true
geometry: margin=1.25cm
output: pdf_document
---

Documentation for SpaceY

## AIM: Zero Waste Space

## MOTIVATION:

Space debris such as human made payload (objects from wear and tear, collisions) pose a significant danger to communication satellites, telescopes, spacecrafts as well as crew members on missions. These debris can also fall back to Earth after orbital decay.

This galvanized us to come up with an idea to not only keep a check on such debris in space but also transport them back to earth for re-use.

Hence, the SpaceY robot was born!
FURTHER LOOK INTO THE DANGER OF SPACE DEBRIS:
Our aim is to prevent the unfolding of Kessler’s syndrome. Cascading effect of the debris can be non-reversible rendering it to not be as cost effective to depend on space.

## SPACE DEBRIS PRODUCING EVENTS:

The prolific disintegration of Fengyun - 1C produced thousands of fragments orbiting the Earth and posed a constant harm to ISS and other equipments in space.

## OVERVIEW OF THE LOCATION OF SPACE DEBRIS:
Low Earth Orbit is where majority of our satellites and telescopes are located. Defunct satellites, rocket thrusters, fragmentation debris further increases the object density in the area.

## SUSTAINABILITY ASPECT:
By capturing and transporting the debris human made back to Earth, we can re-use the scraps in various industries. The meteoroids brought in could also be used for research and studies.

## TECHNICAL SPECIFICATIONS
2 types of debris to consider in our MVP: metallic payload and small rocks/ meteoroids
Dimensions of our bot: 2m X 2m.
Size of debris it can collect:
Rocks can be collected directly by the bot via the extrusion and the force upon impact can be reduced due to a cushioning effect by elastic damping

## TECHNICAL SPECIFICATIONS AND REASONING OF OUR MODEL:
Space has an extremely low pressure and density. Hence, we can conclude it to be a vacuum. Therefore, the law of inertia is respected which we have to consider in the design of our model.
We decided to use a gyroscope in our model as the angular momentum is conserved. It will have 3 degrees of freedom. Hence, the bot can rotate about 3 axises.

Gyroscopic motion provides stability due to tendency of rotating objects to maintain its orientation of rotation [follows Newton’s first law pop motion also known as the law of inertia].
There will be 3 Reaction wheels placed in the centre of our model. It has several advantages: it does not consume fuel; it is relatively power efficient; does not rely on the magnetic field. 

However, a few disadvantages of the same is that it generates micro-vibrations and needs lubrication.
The bot will be self powered by solar panels and can also move around via thrusters.
There will be 4 debris collecting extrusions to increase the surface area and have maximum usage of the bot.
2 types of debris to consider in our MVP: metallic payload  from human made equipments and small rocks/ meteoroids
Dimensions of our bot: 2m X 2m. 98% of our debris are under 10 cm.
The debris upon entering the bot will be faced by a cushioning effect done by elastic dampening to reduce the force upon impact. It will then be stored in the body of the bot.
Damping materials reduces the force upon impact and dissipates the increased heat of the incoming debris. Sorbothane can be a potential material used in the interior of the bot.
We envision our end product to be a swarm of robots as it makes it more feasible and practical.
Sensor technology will be used. 2 types of sensor technologies:
LIDAR sensor: for the location and size of debris
Stabilization sensor: for the location and orientation of the bot

Examples of debris:
Defunct satellites, rocket thrusters, fragmentation debris,
Low Earth Orbit is where majority of our satellites and telescopes are located. Further explosions increases the object density
Possibly recurring event - hence vital to have something that keeps a check on it

Also large parts of spacecrafts have a risk of falling back to earth as well - posing a danger to human life on earth as well
We took into account various factors for the design of out model - gyroscope
Angular momentum is conserved - hence it rotates only about one axis
Movement of the bot - dictated by the gyroscopic 

Detection of debris - utilize a sensor [Lidar sensor to determine the location and the size of the debris]
New

Hence, we decided to design a robot which collects these debris as they not only pose as a danger to astronauts but also equipments in space such as satellites and space stations.
Our robot will work similar to a gyroscope - 3 degrees of freedom - hence can rotate about 3 axises - x,y,z
Provides stability - due to gyroscopic motion - tendency of rotating objects to maintain its orientation of rotation [follows Newton’s first law pop motion also known as the law of inertia]