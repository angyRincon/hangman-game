import Link from "next/link";
import { PageBottomActions, PageBox, PageContainer } from "./PageStyled";
import PlayButton from "@/components/atoms/PlayButton";
import MainTitle from "@/components/molecules/MainTitle";
import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import { SettingsTab } from "./settings/types";

export default function Home() {
  return (
    <PageContainer>
      <PageBox>
        <MainTitle />
        <PlayButton />

        <PageBottomActions>
          <Button label='How to Play' />

          <Link href={`/settings?tab=${SettingsTab.THEME}`}>
            <IconButton size="small" variant="secondary">
              <SettingsIcon size="small" />
            </IconButton>
          </Link>
        </PageBottomActions>

      </PageBox>
    </PageContainer>
  );
}
