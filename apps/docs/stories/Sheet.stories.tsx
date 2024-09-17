import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  TabGroup,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@global-x-etfs/gx-components";
import SearchIcon from "./assets/search.svg?react";

const meta: Meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            nunc vitae tortor tincidunt bibendum. Nullam quis mauris non nisi
            consectetur ultrices. Integer sed nunc ac metus ultricies sodales.
            Nullam auctor ultricies nisl, sit amet consequat est commodo sed.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec euismod, ante ac rutrum viverra, ipsum
            velit ullamcorper nisi, id aliquam nisl nunc eget nunc. Donec
          </SheetDescription>
          <SheetFooter>
            <Button>
              <SheetClose>Close</SheetClose>
            </Button>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const ExampleSheetWithInteractiveContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            nunc vitae tortor tincidunt bibendum. Nullam quis mauris non nisi
            consectetur ultrices. Integer sed nunc ac metus ultricies sodales.
            Nullam auctor ultricies nisl, sit amet consequat est commodo sed.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec euismod, ante ac rutrum viverra, ipsum
            velit ullamcorper nisi, id aliquam nisl nunc eget nunc. Donec
          </SheetDescription>

          <Input label="Name" placeholder="" />
          <Input label="Email" type="email" placeholder="" />
          <Input label="Phone" type="number" placeholder="" />

          <SheetFooter>
            <Button>
              <SheetClose>Close</SheetClose>
            </Button>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const SearchSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side="top" className="bg-marine min-h-[400px]">
        <div className="w-full flex justify-center place-content-center h-full">
          <div className="max-w-lg w-full h-full ">
            <TabGroup defaultValue="site">
              <TabsList tabListStyle="search">
                <TabsTrigger tabTriggerStyle="search" value="site">
                  Site Search
                </TabsTrigger>
                <TabsTrigger tabTriggerStyle="search" value="holding">
                  Holding Search
                </TabsTrigger>
              </TabsList>
              <TabsContent value="site">
                <label className="text-lg font-proxima pb-4 text-white ">
                  Explore research, content or product pages within our site
                </label>

                <Input
                  className="w-full mt-4"
                  label=""
                  placeholder="Search our site"
                  afterContent={<SearchIcon />}
                />
              </TabsContent>
              <TabsContent value="holding">
                <label className="text-lg font-proxima pb-4 text-white ">
                  Look up individual securities found in Global X ETFs
                </label>

                <Input
                  className="w-full mt-4"
                  placeholder="Name or ticker (e.g. AAPL)"
                  afterContent={<SearchIcon />}
                />
              </TabsContent>
            </TabGroup>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
