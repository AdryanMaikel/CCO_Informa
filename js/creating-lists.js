import { supervisions, activies, events, motives, problems, operators } from "./lists.js"
import { createInteractiveInput } from "./data.js"

createInteractiveInput("who_informed", supervisions)
createInteractiveInput("box_operator", operators)
createInteractiveInput("box_direction", activies)
createInteractiveInput("box_event", events)
createInteractiveInput("box_motive", motives)
createInteractiveInput("box_problems", problems)