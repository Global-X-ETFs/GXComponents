import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarDetails,
  AvatarImage,
  Button,
  Card,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleAvatar: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarImage
          src="https://globalxetfs.eu/content/files/Tom_Park-600x600-1.jpg"
          alt="Thomas Park"
        />
        <AvatarDetails name="Thomas Park" position="Interim CEO" />
        <Dialog>
          <DialogTrigger>
            <Button className="font-normal">Read Bio</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thomas Park</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <DialogDescription>
              <Card className="flex flex-col gap-4 font-proxima">
                <img
                  src="https://globalxetfs.eu/content/files/Tom_Park-600x600-1.jpg"
                  alt="Thomas Park"
                  className="mt-8 aspect-square"
                />
                <div className="font-sans">
                  <h3 className="text-xl">Thomas Park</h3>
                  <p className="text-md text-granite">Interim CEO</p>
                </div>
                <div className="text-granite gap-4 flex flex-col">
                  <p>
                    Tom joined Global X as a member of the board in 2018. He
                    leads the senior management team to drive execution across
                    all functional areas, fulfilling the company’s mission of
                    empowering investors with unexplored and intelligent
                    solutions.
                  </p>
                  <p>
                    For the past 15 years, Tom has held senior roles in the
                    global ETF, real estate, private equity and venture capital
                    divisions of our parent company, Mirae Asset Global
                    Investments. He is currently co-CEO of Mirae Asset Global
                    Investments (USA), in addition to serving on the board of
                    Horizons ETFs (Canada), among other Mirae Asset entities.
                    Previously, Tom worked in the investment banking divisions
                    of Goldman Sachs and KPMG Consulting (now BearingPoint).
                  </p>
                  <p>
                    Tom holds a BA from The American University of Paris and an
                    MBA from the University of Chicago Booth School of Business.
                  </p>
                </div>
              </Card>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </Avatar>
    );
  },
};
