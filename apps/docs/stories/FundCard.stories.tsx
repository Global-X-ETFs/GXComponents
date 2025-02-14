import type { Meta, StoryObj } from "@storybook/react";
import {
  FundCard,
  FundCardHeader,
  FundCardImage,
  FundCardSubtitle,
  FundCardTitle,
} from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/FundCard",
  component: FundCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FundCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BOTZFund: Story = {
  render: () => {
    return (
      <div className="w-96">
        <FundCard>
          <FundCardImage
            src="https://assets.globalxetfs.com/svg-icons/BOTZ.svg"
            alt="Botz Logo"
          />
          <FundCardHeader>
            <FundCardTitle>
              Robotics & Artificial Intelligence UCITS ETF
            </FundCardTitle>
            <FundCardSubtitle>BOTZ</FundCardSubtitle>
          </FundCardHeader>
        </FundCard>
      </div>
    );
  },
};

export const AIQFund: Story = {
  render: () => {
    return (
      <div className="w-96">
        <FundCard>
          <FundCardImage
            src="https://assets.globalxetfs.com/svg-icons/AIQ.svg"
            alt="AIQ Logo"
          />
          <FundCardHeader>
            <FundCardTitle>Artificial Intelligence UCITS ETF</FundCardTitle>
            <FundCardSubtitle>AIQU</FundCardSubtitle>
          </FundCardHeader>
        </FundCard>
      </div>
    );
  },
};

export const PAVEFund: Story = {
  render: () => {
    return (
      <div className="w-96">
        <FundCard>
          <FundCardImage
            src="https://assets.globalxetfs.com/svg-icons/PAVE.svg"
            alt="PAVE Logo"
          />
          <FundCardHeader>
            <FundCardTitle>U.S. Infrastructure Development ETF</FundCardTitle>
            <FundCardSubtitle>PAVE</FundCardSubtitle>
          </FundCardHeader>
        </FundCard>
      </div>
    );
  },
};

export const EMCFund: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/EMC.svg"
          alt="EMC Logo"
        />
        <FundCardHeader>
          <FundCardTitle>Emerging Markets Great Consumer ETF</FundCardTitle>
          <FundCardSubtitle>EMC</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const QYLDFund: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/QYLD.svg"
          alt="QYLD Logo"
        />
        <FundCardHeader>
          <FundCardTitle>Nasdaq 100 Covered Call ETF</FundCardTitle>
          <FundCardSubtitle>QYLD</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const MissingImage: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage src="" alt="Robotics & Aritifical Intelligence ETF" />
        <FundCardHeader>
          <FundCardTitle>Missing Image</FundCardTitle>
          <FundCardSubtitle>MISS</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const MissingTitle: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/BOTZ.svg"
          alt="Botz Logo"
        />
        <FundCardHeader>
          <FundCardTitle />
          <FundCardSubtitle>MISS</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const MissingSubtitle: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/BOTZ.svg"
          alt="Botz Logo"
        />
        <FundCardHeader>
          <FundCardTitle>Robotics & Aritifical Intelligence ETF</FundCardTitle>
          <FundCardSubtitle />
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const MissingAltText: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/black/BOTZ.svg"
          alt=""
        />
        <FundCardHeader>
          <FundCardTitle>Robotics & Aritifical Intelligence ETF</FundCardTitle>
          <FundCardSubtitle>BOTZ</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const BlackFilteredImage: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/BOTZ.svg"
          alt="Botz Logo"
          filter="black"
        />
        <FundCardHeader>
          <FundCardTitle>Robotics & Aritifical Intelligence ETF</FundCardTitle>
          <FundCardSubtitle>BOTZ</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};

export const MarineFilteredImage: Story = {
  render: () => {
    return (
      <FundCard>
        <FundCardImage
          src="https://assets.globalxetfs.com/svg-icons/black/BOTZ.svg"
          alt="Botz Logo"
          filter="marine"
        />
        <FundCardHeader>
          <FundCardTitle>Robotics & Aritifical Intelligence ETF</FundCardTitle>
          <FundCardSubtitle>BOTZ</FundCardSubtitle>
        </FundCardHeader>
      </FundCard>
    );
  },
};
