import { Link } from "@nextui-org/react";

import { FOOTER_LINKS } from "@/consts/links";
import { SOCIAL_MEDIAS } from "@/consts/socialMedia";

import Container from "@/components/Layout/Container";
import Logo from "@/components/Logo";
import { SocialMediaData } from "@/consts/types";

export default function FooterSection() {
  return (
    <footer className="bg-background">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Logo />
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {FOOTER_LINKS.map((link) => (
              <li key={link.title}>
                <Link color="foreground" href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {SOCIAL_MEDIAS.map((item) => {
              return (
                <li key={item.title}>
                  <SocialMediaIcon socialMedia={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function SocialMediaIcon({ socialMedia }: { socialMedia: SocialMediaData }) {
  const Icon = socialMedia.icon;
  return (
    <Link color="foreground" href={socialMedia.url}>
      <span className="sr-only">{socialMedia.title}</span>
      <Icon />
    </Link>
  );
}
