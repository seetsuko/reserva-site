import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
    component: Circle,
    title: "Example/Circle",
    argTypes: {
        variant: {
            control: { type: "color"},
            options: ["orange", "green", "yellow"]

        }
    },
    tags: ["autodocs"],
}

export default meta

type story = StoryObj<typeof meta>


/**
 *
 *   オレンジ色の円です */
export const BaseCircle: story = {
    args: {
        variant: "orange",
    }
}
export const GreenCircle: story = {
    args: {
        variant: "green",
    }
}
export const YellowCircle: story = {
    args: {
        variant: "yellow",
    }
}

export const GroupedCircle: story = {
    render: () =>(
        <div style={{padding: 10}}>
            <Circle variant="orange"/>
            <Circle variant="green"/>
            <Circle variant="yellow"/>
        </div>
    )
}