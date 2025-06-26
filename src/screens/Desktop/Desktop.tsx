import { LogOutIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "How It Work?", href: "#" },
    { label: "Why Use CCMS?", href: "#" },
  ];

  return (
    <main className="bg-[#6a3db2] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#6a3db2] overflow-hidden w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-6 pt-[69px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <img
                className="w-[198px] h-[184px] object-cover"
                alt="CCMS Logo"
                src="/remove-the-background-1.png"
              />
            </div>
            <p className="font-extralight text-white text-xl tracking-[0] leading-normal">
              Your Voice. Your City. Your Solution.
            </p>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-['Outfit',Helvetica] font-normal text-white text-2xl tracking-[0] leading-normal"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-2 bg-[#6a3db2] rounded-lg border border-solid border-black"
            >
              <span className="font-single-line-body-base text-black whitespace-nowrap">
                LOGIN
              </span>
              <LogOutIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-3 bg-[#6a3db2] rounded-lg border border-solid border-[#673faf]"
            >
              <span className="font-single-line-body-base text-[#1e1e1e] whitespace-nowrap">
                REGISTRATION
              </span>
              <SendIcon className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-row mt-16">
          {/* Left Content */}
          <div className="relative w-1/2 pl-16">
            <div className="absolute w-[658px] h-[641px] top-32 left-0 rounded-[329px/320.5px] bg-[linear-gradient(180deg,rgba(124,61,175,1)_12%,rgba(124,61,175,1)_25%,rgba(124,61,175,1)_38%,rgba(124,61,175,1)_52%,rgba(124,61,175,1)_66%,rgba(130,61,177,1)_79%,rgba(151,62,182,1)_94%)]" />

            <div className="relative z-10">
              <h1 className="font-['Inter',Helvetica] font-extralight italic text-white text-[80px] leading-normal mb-8">
                Your Voice, <br />
                Our Action
              </h1>

              <p className="font-['Outfit',Helvetica] font-normal text-white text-base leading-normal max-w-[448px]">
                Report Local Issues Like Power, Water, Roads, And More – Get
                Timely Solutions From Your Municipality.
              </p>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative w-1/2">
            <img
              className="absolute w-[541px] h-[596px] top-0 right-0"
              alt="Background Ellipse"
              src="/ellipse-3.svg"
            />

            <div className="relative z-10 mt-[218px]">
              {/* Main illustration container */}
              <Card className="bg-transparent border-0 relative">
                <CardContent className="p-0 relative">
                  {/* Decorative elements */}
                  <img
                    className="absolute w-[89px] h-[70px] top-[129px] left-[536px]"
                    alt="Twisted leaf"
                    src="/twisted-leaf.svg"
                  />
                  <img
                    className="absolute w-[91px] h-[42px] top-[216px] left-[89px]"
                    alt="Decorative element"
                    src="/fill-16.svg"
                  />
                  <img
                    className="absolute w-[140px] h-[111px] top-[92px] left-[52px]"
                    alt="Leaf"
                    src="/leaf.svg"
                  />
                  <img
                    className="absolute w-[74px] h-[114px] top-[164px] left-[542px]"
                    alt="Decorative element"
                    src="/fill-10.svg"
                  />
                  <img
                    className="absolute w-[101px] h-[46px] top-[154px] left-3"
                    alt="Leaf element"
                    src="/leave-the-leaf-.svg"
                  />

                  {/* App screens */}
                  <div className="absolute w-[134px] h-[284px] top-[18px] left-[157px] bg-[url(/container-2.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[25px] h-7 top-[238px] left-[54px]"
                      alt="Touch icon"
                      src="/touch-2.svg"
                    />
                    <img
                      className="absolute w-[25px] h-1 top-[15px] left-[54px]"
                      alt="Camera"
                      src="/camera.png"
                    />
                    <div className="absolute w-[110px] h-48 top-[26px] left-3">
                      {/* App screen content */}
                      {[0, 1, 2, 3].map((index) => (
                        <div
                          key={index}
                          className={`absolute w-[110px] h-${index === 0 ? "[51px]" : "10"} top-[${index * 47 + (index === 0 ? 0 : 11)}px] left-0 bg-[url(/background-6.svg)] bg-[100%_100%]`}
                        >
                          <img
                            className="absolute w-[61px] h-5 top-[15px] left-[33px]"
                            alt="Screen content"
                            src={`/clip-path-group-${index + 1}.png`}
                          />
                          <img
                            className="absolute w-5 h-[23px] top-3.5 left-2"
                            alt="Avatar"
                            src="/touch-2.svg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second app screen */}
                  <div className="absolute w-[282px] h-[326px] top-[66px] left-[268px] bg-[url(/container-2.svg)] bg-[100%_100%]">
                    <div className="absolute w-[59px] h-[76px] top-10 left-[210px] bg-[url(/background-9.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[42px] h-[49px] top-3.5 left-2"
                        alt="Profile info"
                        src="/profile-info.png"
                      />
                    </div>

                    <div className="absolute w-[282px] h-[25px] top-0 left-0 bg-[url(/header.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[27px] h-2 top-[9px] left-2"
                        alt="Buttons"
                        src="/buttons.png"
                      />
                    </div>

                    <div className="absolute w-[59px] h-[183px] top-[124px] left-[210px] bg-[url(/background-10.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[29px] h-[149px] top-[17px] left-[15px]"
                        alt="Rows"
                        src="/rows-3.png"
                      />
                    </div>

                    <div className="absolute w-[189px] h-[265px] top-[41px] left-[13px]">
                      {/* App screen items */}
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <div
                          key={index}
                          className={`absolute w-[189px] h-${index === 0 ? "11" : "[37px]"} top-[${
                            index === 0
                              ? 0
                              : index === 1
                                ? 52
                                : index === 2
                                  ? 96
                                  : index === 3
                                    ? 229
                                    : index === 4
                                      ? 184
                                      : 140
                          }px] left-0 bg-[url(/background-6.svg)] bg-[100%_100%]`}
                        >
                          <img
                            className="absolute w-[141px] h-[15px] top-[11px] left-2"
                            alt="Content"
                            src={`/clip-path-group-${index + 9}.png`}
                          />
                          <img
                            className="absolute w-3 h-[13px] top-3 left-[163px]"
                            alt="Check"
                            src={`/check-${index + 3}.png`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements and charts */}
                  <img
                    className="absolute w-[109px] h-[207px] top-[223px] left-[512px]"
                    alt="Decorative element"
                    src="/fill-1.svg"
                  />
                  <img
                    className="absolute w-[86px] h-14 top-[315px] left-[521px]"
                    alt="Decorative element"
                    src="/fill-20.svg"
                  />
                  <img
                    className="absolute w-[115px] h-[262px] top-[312px] left-[13px]"
                    alt="Plant"
                    src="/plant.png"
                  />
                  <img
                    className="absolute w-[34px] h-[38px] top-[264px] left-[65px]"
                    alt="Pie chart"
                    src="/pie-chart.png"
                  />
                  <img
                    className="absolute w-[51px] h-14 top-[257px] left-[581px]"
                    alt="Chart"
                    src="/chart.png"
                  />
                  <img
                    className="absolute w-[52px] h-[54px] top-0 left-[479px]"
                    alt="Graph"
                    src="/graph.png"
                  />
                  <img
                    className="absolute w-[39px] h-[43px] top-2.5 left-[427px]"
                    alt="Chart"
                    src="/chart-2.png"
                  />

                  {/* People illustrations */}
                  <div className="absolute w-[480px] h-[460px] top-[381px] left-[114px]">
                    {/* Person sitting */}
                    <div className="absolute w-[223px] h-[359px] top-[90px] left-0">
                      <div className="relative h-[359px]">
                        <div className="absolute w-[62px] h-[94px] top-0 left-11">
                          <div className="relative h-[94px]">
                            <img
                              className="absolute w-10 h-[77px] top-[17px] left-4"
                              alt="Head"
                              src="/head-2.png"
                            />
                            <img
                              className="absolute w-[62px] h-[60px] top-0 left-0"
                              alt="Hair"
                              src="/hair.svg"
                            />
                          </div>
                        </div>
                        <div className="absolute w-[223px] h-44 top-[183px] left-0">
                          <div className="relative h-44">
                            <div className="absolute w-[109px] h-[131px] top-11 left-0 bg-[url(/seat-2.png)] bg-[100%_100%]" />
                            <img
                              className="absolute w-[85px] h-[155px] top-4 left-[118px]"
                              alt="Skin"
                              src="/skin.svg"
                            />
                            <img
                              className="absolute w-[69px] h-[115px] top-3.5 left-[119px]"
                              alt="Leg"
                              src="/leglower.svg"
                            />
                            <img
                              className="absolute w-[49px] h-[43px] top-[130px] left-[109px]"
                              alt="Shoe"
                              src="/right-shoe.png"
                            />
                            <img
                              className="absolute w-[55px] h-[22px] top-[154px] left-[168px]"
                              alt="Shoe"
                              src="/right-shoe-2.png"
                            />
                            <img
                              className="absolute w-[162px] h-[138px] top-0 left-11"
                              alt="Leg and body"
                              src="/leg-and-butt.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="absolute w-[98px] h-[148px] top-[71px] left-9"
                          alt="Body"
                          src="/body-long-sleeve-1.png"
                        />
                      </div>
                    </div>

                    {/* Person standing */}
                    <div className="absolute w-[232px] h-[460px] top-0 left-[249px]">
                      <div className="absolute w-[156px] h-[118px] top-0 left-[75px]">
                        <div className="relative h-[118px]">
                          <img
                            className="absolute w-10 h-[77px] top-10 left-0"
                            alt="Head"
                            src="/head-5.png"
                          />
                          <img
                            className="absolute w-[153px] h-[78px] top-0 left-[3px]"
                            alt="Hair"
                            src="/hair-2.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute w-36 h-[253px] top-[207px] left-[27px]">
                        <div className="relative h-[253px]">
                          <img
                            className="absolute w-[66px] h-[241px] top-0 left-[37px]"
                            alt="Leg"
                            src="/leg.svg"
                          />
                          <img
                            className="absolute w-20 h-[243px] top-0 left-[62px]"
                            alt="Leg"
                            src="/leg-2.svg"
                          />
                          <img
                            className="absolute w-[55px] h-[22px] top-[231px] left-[89px]"
                            alt="Shoe"
                            src="/left-shoe.png"
                          />
                          <img
                            className="absolute w-[55px] h-[22px] top-[231px] left-0"
                            alt="Shoe"
                            src="/right-shoe-3.png"
                          />
                          <img
                            className="absolute w-[61px] h-[66px] top-0 left-[46px]"
                            alt="Bottom"
                            src="/bottom-3.svg"
                          />
                          <img
                            className="absolute w-[62px] h-[66px] top-0 left-[59px]"
                            alt="Bottom"
                            src="/bottom-4.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute w-[218px] h-[177px] top-[88px] left-0"
                        alt="Body"
                        src="/body.png"
                      />
                    </div>
                  </div>

                  {/* Background image for app screens */}
                  <img
                    className="absolute w-[705px] h-64 top-[286px] left-0"
                    alt="Background"
                    src="/clip-path-group.png"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
