import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tin</GradientText> 👋
        </>
      }
      description={
        <>
          I use{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Discord
          </a>{' '}
          since 2018, also I can code in{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            PHP, NodeJS
          </a>
          .
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      
    />
  </Section>
);

export { Hero };
