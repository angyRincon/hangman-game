import HowToPlayCard from "@/components/molecules/HowToPlayCard"
import { HowToPlayContentContainer, HowToPlayContentWrapper } from "./HowToPlayContentStyled"
import { FC } from "react"
import { HowToPlayCardProps } from "@/components/molecules/HowToPlayCard/HowToPlayCard"

interface HowToPlayContentProps {
    elements: HowToPlayCardProps[]
}

const HowToPlayContent: FC<HowToPlayContentProps> = ({ elements }) => {
    return (
        <HowToPlayContentWrapper>
            <HowToPlayContentContainer>
                {elements.map(element => (
                    <HowToPlayCard
                        position={element.position}
                        title={element.title}
                        content={element.content}
                    />
                ))}
            </HowToPlayContentContainer>
        </HowToPlayContentWrapper>
    )
}
export default HowToPlayContent