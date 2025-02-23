"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Copy, Minus, Plus } from "lucide-react";
import { toast as sonner } from "sonner";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { toast } = useToast();
  const [goal, setGoal] = useState(350);

  const [accountData, setAccountData] = useState({ name: "", username: "" });
  const [passwordData, setPasswordData] = useState({
    current: "",
    newPassword: "",
  });

  const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

  const slideCount = 7;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ];

  function onClick(value: number) {
    setGoal(Math.max(200, Math.min(400, goal + value)));
  }

  return (
    <div>
      <h1 className="text-4xl mb-2 font-bold">ShadUi components</h1>
      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Carousel
      </h3>
      <Carousel
        setApi={setApi}
        className="w-full relative border rounded-md overflow-hidden"
      >
        <CarouselContent className="ml-0">
          {Array.from({ length: slideCount }).map((_, index) => (
            <CarouselItem key={index} className="pl-0 w-[350px] h-[230px] basis-auto">
              <div className="w-[350px] h-[230px]">
                <img
                  className="size-full w-fit object-cover"
                  src={`https://picsum.photos/350/230?random=${index}`}
                  loading="lazy"
                  width={350}
                  height={230}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 left-0 right-0 w-fit mx-auto px-2 py-1 flex justify-center items-center gap-1 h-4 z-20 bg-gray-500/40 rounded-xl ">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "w-1 h-1 rounded-full transition-all",
                current - 1 === index ? "bg-slate-200" : "bg-gray-900/30"
              )}
            ></span>
          ))}
        </div>
      </Carousel>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Buttons
      </h3>
      <div className="flex gap-2 flex-wrap">
        <Button variant="default">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="ghost">Click me</Button>
        <Button variant="link">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="secondary">Click me</Button>
      </div>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Switch
      </h3>
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">Tabs</h3>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={accountData.name}
                  onChange={(e) =>
                    setAccountData({ ...accountData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={accountData.username}
                  onChange={(e) =>
                    setAccountData({ ...accountData, username: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you will be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input
                  id="current"
                  type="password"
                  value={passwordData.current}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      current: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input
                  id="new"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">Cards</h3>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Skeleton
      </h3>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Toaster
      </h3>
      <div className="flex gap-2">
        <Button
          onClick={() =>
            sonner("Hello", {
              description: "This is a description",
              action: {
                label: "Click me",
                onClick: () => sonner("Hello"),
              },
            })
          }
        >
          Show sonner
        </Button>

        <Button
          onClick={() =>
            toast({
              variant: "default",
              title: "Hello",
              description: "This is a description",
            })
          }
        >
          Show toast
        </Button>
      </div>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Drawer
      </h3>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <Minus />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <Plus />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--foreground))",
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Dialog
      </h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button
              type="button"
              size="sm"
              className="px-3"
              onClick={() => {
                const link = document.getElementById(
                  "link"
                ) as HTMLInputElement;
                navigator.clipboard
                  .writeText(link.value)
                  .then(() => {
                    toast({
                      title: "Copied to clipboard",
                      description: "You can now paste it anywhere",
                    });
                  })
                  .catch((err) => {
                    toast({
                      variant: "destructive",
                      title: "Failed to copy",
                      description: "Please try again",
                    });
                    console.error(err);
                  });
              }}
            >
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <h3 className="mb-2 mt-7 text-2xl font-semibold tracking-tight">
        Sheets
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button>{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when youre done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                    autoFocus={false}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                    autoFocus={false}
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  );
}
