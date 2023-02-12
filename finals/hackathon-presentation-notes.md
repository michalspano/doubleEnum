---
title: Hackathon Presentation Notes 
author: Michal Spano
date: 2023-02-13
papersize: a4
fontsize: 12.5pt
colorlinks: true
geometry: margin=1.3cm
output: pdf_document
---

# Hackathon Presentation Notes

The notes for the project’s slides.

---

# Wow message?

1. START: Number question (Slide 3)
2. END:  The **SDCP bracelet** from space

## Slide 0 - `doubleEnum – SpaceY` [Mariia]

- A welcome message

## Slide 1 - `doubleEnum` - Introduction [Mariia]

- Explain **who** we are (rephrase what’s on the slide)
- **Emphasise** that we like competitions, Hackathons, etc.

## Slide 2 - `doubleEnum` in action [Mariia]

- Present the photos from the Gothenburg venue of the previous round of the event
- **Point out**: brainstorming session(s),  sketching the model/prototype

## Slide 3 - Question ****[Mariia]

- A **less/more question** (based on a statistical result) to interact with the audience.

## Slide 4 - Some numbers [Mariia]

- In this slide, the result of the previous question is given.

## Slide 5 - Some numbers (2) [Mariia]

- In this slide, more numbers are presented (i.e., some statistics).
- Not much attention needs to be spent on this slide.

## Slide 6 *spaceY - why?* [Michal]

- Payload $\Rightarrow$ significant danger (…)
- Space environment $\equiv$ important
- *Inspiration?* A similar scenario - Gravity (movie)

## Slide 7 - Motivation [Michal]

- **Kessler Syndrome**
    - The Kessler Syndrome is a theoretical scenario in which Earth's orbit is overpopulated with objects and debris, preventing the use of satellites in certain sections of Earth's orbit.
- Debris (a lot) $\Rightarrow$ a non-reversible effect
- **Re-use** of materials from the disposed debris

## Slide 8 - **SDCP [Michal]**

- State the name with an **emphasis**.

## Slide 9 - Product overview I [Agrima]

- Product introduced in three **main stages**

## Slide 10 - Technical requirements Part 1 [Agrima] `WHAT?`

1. **Debris extraction – Problem**
    - 2 types of debris to consider in our MVP: metallic payload from human made objects and small rocks/ meteoroids in the outer orbit
    - 98% of our debris are under 10 cm.
        - Dimensions of our bot: 2m X 2m.
2. **Movement and Stabilisation**
    - Indeed, to be able to obtain the debris [the robot], the robot needs to ****move**** in a stabilised manners
    - The exact specifications will be addressed by my team-mate Ionel.
3. **Prevent collision damage**
    - With movement comes the **risk of collision with external objects.**
    - This risk has been considered in the technical specs.
4. **Debris transportation**
    - Once enough materials is gathered,  the robot is prompted to return (with the material) to the station.
    - We **envision** our end product to be a swarm of robots as it makes it more feasible and practical.

## Slide 10 - Technical requirements Part 2 [Ionel] `HOW?`

1. Summary:
    1. Reaction Wheels/Gyroscopes
        1. Inertia/Conservation of Angular Momentum
        2. Low use of energy
        3. Easy to implement
    2. Sensors for positioning
        1. LIDAR
        2. Orientation
    3. Thrusters
        1. Small adjustments
    4. Solar Panels
        1. Energy
    5. Collecting extrusions
        1. Big enough to maximize the area
        2. Cushioning effect
    6. Go back to the ship
2. Space is a vacuum, there is extremely low pressure and density. Which means that the friction is practically zero.
3. Since there is no friction in space, the angular momentum will be conserved.
4. We can make use of that property by applying gyroscopes to our model, due to the tendency of rotating objects to maintain their orientation of rotation [follows Newton’s first law of motion, also known as the law of inertia]. (Optional)
5. That’s why we will place 3 Reaction wheels in the center of our model. Hence, the bot will have a 3-axis rotation.
6. This has several advantages:
    1. it consumes less fuel than conventional propulsion mechanisms
    2. it is relatively power efficient
    3. does not rely on the magnetic field
7. However, a few disadvantages of the same are:
    1. it generates micro-vibrations
    2. needs lubrication
8. The bot will be self-powered by solar panels and can also move around via thrusters for micro-adjustments.
9. 2 types of sensor technologies:
    - **LIDAR sensor:** for the location and size of debris
    - **Stabilisation sensor:** for the location and orientation of the bot
10. There will be 4 debris collecting extrusions to increase the surface area and have a maximum usage of the bot.
11. The debris upon entering the bot will be faced with a cushioning effect done by elastic dampening to reduce the force upon impact. It will then be stored in the body of the bot. 
12. Damping materials reduce the force upon impact and dissipate the increased heat of the incoming debris.
13. *Sorbothane* can be a potential material used in the interior of the bot. (Optional)

## Slide 11 - Model Prototype [Ionel]

- “*Based on the presented ideas, here’s the initial 3D rendition of the model that we’ve created.”*

## Slide 12 - Product overview II [Agrima]

- *Now we continue…*

## Slide 13  - Debris Analysis [Agrima]

- *Just to remind us:* - payload, small rocks/meteoroids
- Transport $\Rightarrow$ laboratories
    - We need to observe if the material is interesting/valuable (by well-established techniques/practises),
    - if so, it is further preserved.

## Slide 14 - Product overview III [Michal]

- *Hm, you might be wondering, what is the use of all such debris…*

## Slide 15 - Debris re-use [Michal]

1. **Material recycling**
    1. Human payload $=$ re-melting or other processes; for branches of industry
    2. Waste $=$ mineral mining (metals: nickel, cobalt, iron, platinum, etc.)
2. **Sustainability aspect**
    1. Reduction of the space pollution
    2. Potential future risks and issues (that arise from space pollution) will be minimised in the early stage
3. **Scientific research**
    1. The obtained material can be provided amongst scientific institutions/foundations
    2. This way, new projects are supported
4. **BRACELET**
    1. A unique, one-to-one, bracelet can be bought
        1. Contains pieces of the materials obtained from space $=$ *“Made in space”.*

## Slide 16 - There’s more [Michal]

1. A **video pitch** via **`YouTube`**
2. A **website** of the SDCR

## Slide 17 - The Quote [Mariia]

- “Be part of the solution, not part of the pollution.” – Unknown

## Slide 18 - END [Mariia]

- *Thank you.*
