import { FC } from "react"
import { HowToPlayCardContainer, HowToPlayCardContent, HowToPlayCardPosition, HowToPlayCardTitle } from "./HowToPlayCardStyled";

export interface HowToPlayCardProps {
    position: string;
    title: string;
    content: string
}

const HowToPlayCard: FC<HowToPlayCardProps> = ({ position, title, content }) => {
    return (
        <HowToPlayCardContainer>
            <HowToPlayCardPosition>
                {position}
            </HowToPlayCardPosition>

            <HowToPlayCardTitle>
                {title}
            </HowToPlayCardTitle>

            <HowToPlayCardContent>
                {content}
            </HowToPlayCardContent>

        </HowToPlayCardContainer>
    )
}
export default HowToPlayCard