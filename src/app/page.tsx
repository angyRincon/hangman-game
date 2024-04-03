import Link from "next/link";
import { PageBottomActions, PageBox, PageContainer } from "./PageStyled";
import PlayButton from "@/components/atoms/PlayButton";
import MainTitle from "@/components/molecules/MainTitle";
import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import SettingsIcon from "@/components/Icons/SettingsIcon";

export default function Home() {
  return (
    <PageContainer>
      <PageBox>
        <MainTitle />
        <PlayButton />

        <PageBottomActions>
          <Button label='How to Play' />
          <Link href='/settings'>
            <IconButton size="small">
              <SettingsIcon size="small" />
            </IconButton>
          </Link>
        </PageBottomActions>

      </PageBox>
    </PageContainer>
  );
}
