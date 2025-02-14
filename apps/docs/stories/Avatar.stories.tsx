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
import LinkedInIconFull from "./assets/LinkedInFull.svg?react";

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
      <div className="w-56">
        <Avatar>
          <AvatarImage
            src="https://www.globalxetfs.com/content/files/Ryan_OConnor-600x600-1.jpg"
            alt="Ryan O’Connor"
          />
          <AvatarDetails name="Ryan O’Connor" position="Chief Executive Officer" />
          <Dialog>
            <DialogTrigger>
              <Button className="font-normal">Read Bio</Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="max-w-5xl ">
              <DialogHeader className="bg-neutral-50">
                <DialogTitle />
                <DialogClose />
              </DialogHeader>
              <DialogDescription>
                <Card border="rounded" className="flex flex-col md:flex-row gap-8 font-proxima items-start">
                  <img
                    src="https://www.globalxetfs.com/content/files/Ryan_OConnor-600x600-1.jpg"
                    alt="Ryan O’Connor"
                    className="aspect-square w-full h-auto md:w-96 md:h-96"
                    height={380}
                    width={380}
                  />
                  <div className="flex flex-col">
                    <div className="font-sans mb-7">
                      <div className="flex justify-between">
                        <h3 className="text-3xl text-marine tracking-wider">
                          Ryan O’Connor
                        </h3>
                        <div className="hidden md:flex">
                          <LinkedInIconFull className="fill-orange cursor-pointer w-5 h-5 mr-2 self-center" />
                          <Button
                            afterContent="arrow"
                            variant="link"
                          >
                            View LinkedIn
                          </Button>
                        </div>
                      </div>
                      <p className="text-md text-granite mb-2">
                        Chief Executive Officer
                      </p>
                    </div>
                    <div className="text-granite text-ml whitespace-pre-wrap text-pretty  col-span-2 lg:col-span-1 [&_p]:mb-5">
                      <p>
                        Ryan was appointed CEO of Global X in 2024. He leads the senior management team to drive execution across all functional areas, fulfilling the company’s mission of empowering investors with unexplored and intelligent solutions.
                      </p>
                      <p>
                        Over the past two decades, Ryan has held senior roles across the ETF industry, most recently as Global Head of ETF Product at Goldman Sachs Asset Management. Prior to that, Ryan worked with State Street Global Advisors, where he led a range of product and capital markets teams for the SPDR ETF franchise.
                      </p>
                      <p>
                        Ryan holds a BA from Bates College and an MBA from Cornell University’s Johnson Graduate School of Management.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:hidden">
                    <LinkedInIconFull className="fill-orange cursor-pointer w-5 h-5 mr-2 self-center" />
                    <Button
                      afterContent="arrow"
                      variant="link"
                    >
                      View LinkedIn
                    </Button>
                  </div>
                </Card>
              </DialogDescription>
          </DialogContent>
          </Dialog>
        </Avatar>
      </div>
    );
  },
};
