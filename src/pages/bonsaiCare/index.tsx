import React from "react";
import {
  PageWrapper,
  Container,
  BigTitle,
  Title,
  Subtitle,
  SubSubtitle,
  Text,
  ImageCaption,
  BoldText,
  DoubleImage,
  DoubleGraph,
  StyledList,
  ImageWrapper,
  Image,
  DividerLine,
  Spacer,
} from "./styles";
import Header from "../../components/header";

import IndoorBonsai01 from "../../assets/images/bonsaiCare/buying-01-indoor-bonsai.jpeg";
import OutddorBonsai01 from "../../assets/images/bonsaiCare/buying-02-outdoor-bonsai.jpeg";
import WateringBonsai01 from "../../assets/images/bonsaiCare/watering-02-bonsai-potbound-roots.jpeg";
import WateringBonsai02 from "../../assets/images/bonsaiCare/watering-04-watered-bonsai.jpeg";

import FertilizerBonsai01 from "../../assets/images/bonsaiCare/fertilizing-02-biogold.jpeg";
import FertilizerBonsai02 from "../../assets/images/bonsaiCare/fertilizing-06-covers-all.jpeg";
import FertilizerBonsai03 from "../../assets/images/bonsaiCare/fertilizing-08-liquid.jpeg";

import RepottingBonsai01 from "../../assets/images/bonsaiCare/howto-repotting-closeup.jpg";
import SubstratesBonsai01 from "../../assets/images/bonsaiCare/soil-00-all-soils.jpeg";
import PotBonsai01 from "../../assets/images/bonsaiCare/bonsai-tree-06.jpeg";
import PotBonsai02 from "../../assets/images/bonsaiCare/bonsai-tree-10.jpg";
import PotBonsai03 from "../../assets/images/bonsaiCare/aacer_bonsai_tree.jpg";
import PotBonsai04 from "../../assets/images/bonsaiCare/Acer-01.jpg";
import PotBonsai05 from "../../assets/images/bonsaiCare/Pinus-01.jpg";
import PotBonsai06 from "../../assets/images/bonsaiCare/Pinus-02.jpg";
import PotBonsai07 from "../../assets/images/bonsaiCare/Pinus-03.jpg";
import PotBonsai08 from "../../assets/images/bonsaiCare/15-Goshin2015.jpeg";
import PotBonsai09 from "../../assets/images/bonsaiCare/oak-03.jpg";
import PotBonsai10 from "../../assets/images/bonsaiCare/oak-04.jpg";

const BonsaiCare: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <BigTitle>Bonsai Tree Care</BigTitle>
        <Text>
          Bonsai care and maintenance are essential for keeping your Bonsai
          healthy and vibrant. Though Bonsai trees are more delicate than the
          average indoor plant, a few basic rules should enable anyone to take
          care of their tree properly. Pay particular attention to where you
          place it and how to water it properly.
        </Text>

        <Text>
          In this section of our website, we explain the basic and advanced
          Bonsai care techniques. It is also important to adapt these care
          guidelines to your specific tree species.
        </Text>
        <Spacer />

        <Title>Placement</Title>
        <Text>
          Determining the optimal spot to place your Bonsai trees can be tricky,
          as several factors (local climate, time of year, etc.) should be
          considered. But the decisive factor is the tree species—particularly
          whether your Bonsai is an indoor or outdoor tree.
        </Text>

        <Subtitle>Indoor Bonsai Location</Subtitle>
        <SubSubtitle>Which Bonsai is best for indoors?</SubSubtitle>
        <Text>
          There are only a few tropical or subtropical trees that grow well
          indoors. The most common, and easiest to care for, is the{" "}
          <BoldText>Ficus Bonsai</BoldText>. The Ficus is tolerant of low
          humidity and is very resilient, making it an excellent choice for
          beginners. Other popular indoor Bonsai include the Dwarf jade, the
          Fukien tea (Carmona), the Hawaiian umbrella (Schefflera), and the
          Sweet plum (Sageretia). If you select one of these trees and care for
          it properly, your Bonsai will thrive indoors.
        </Text>

        <ImageWrapper>
          <Image
            src={IndoorBonsai01}
            alt="Indoor Bonsai trees; a Ficus, Carmona, and Chinese elm"
          />
          <ImageCaption>
            Indoor Bonsai trees; a Ficus, Carmona, and Chinese elm.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <SubSubtitle>
          Why can’t I keep temperate, nontropical Bonsai indoors?
        </SubSubtitle>
        <Text>
          As stated above, temperate trees need a period of dormancy in the
          winter. In this period of dormancy, the yearly growth cycle ends, and
          the tree prepares for the next cycle, which starts again in early
          spring. A tree becomes dormant when temperatures and light intensity
          gradually decrease over several weeks, which does not happen when you
          keep temperate trees indoors. Tropical and subtropical trees do not
          need this period of dormancy.
        </Text>

        <SubSubtitle>Indoor Bonsai Tree Care</SubSubtitle>
        <Text>
          Caring for an indoor Bonsai is different from that of normal potted
          house plants. The main reason is that Bonsai trees are planted in
          small pots and therefore have limited storage for nutrients and water.
          More importantly, tropical trees are accustomed to receiving a lot of
          light and high humidity, climates that are challenging to replicate
          indoors.
        </Text>

        <SubSubtitle>Specific Care of Indoor Bonsai Species:</SubSubtitle>

        <SubSubtitle>1. Light</SubSubtitle>
        <Text>
          The main problem with keeping a tropical Bonsai tree indoors is that
          the intensity of light is much lower than outdoors. Trees won’t die
          immediately if they don’t get enough light, but growth will decrease
          and weaken the plant over time. That’s why placing your Bonsai in a
          bright location, preferably directly in front of a south-facing
          window, is highly recommended. Even when you have a south-facing
          window, the light intensity may still be too low. You can supplement
          this deficit of light with artificial lighting to help your tree.
        </Text>

        <SubSubtitle>2. Humidity</SubSubtitle>
        <Text>
          Another issue with keeping a Bonsai tree indoors is that the tree
          needs relatively high humidity, much higher than the conditions of
          your house, especially with heating or air conditioning. You can
          increase the humidity near your Bonsai tree by placing it on a
          humidity tray filled with water and by misting your tree a few times a
          day. You can also circulate air from outside by opening a window
          during the day.
        </Text>

        <SubSubtitle>3. Watering and Fertilizing</SubSubtitle>
        <Text>
          The most important rule is to never water on a routine. Ignore the
          label attached to your Bonsai tree, which states you need to water
          every X number of days. The best practice is to monitor your tree and
          its soil, and only water when it’s needed.
        </Text>

        <SubSubtitle>4. Temperature</SubSubtitle>
        <Text>
          Tropical tree species need relatively high temperatures throughout the
          year, similar to the standard room temperature of your living room.
          Subtropical Bonsai trees can withstand somewhat lower temperatures and
          generally thrive when they enjoy a winter season with temperatures
          well below that of the standard room temperature.
        </Text>

        <Text>
          To summarize, make sure to select the right tree species and take into
          account the specific care guidelines for indoor trees, and your Bonsai
          will do just fine!
        </Text>
        <DividerLine />
        <Subtitle>Outdoor Bonsai Trees</Subtitle>
        <Text>
          You have a garden or a balcony and can keep your Bonsai tree outside,
          so you want an outdoor tree. Which one? The most important thing to
          consider is which conditions you can offer the tree and which species
          can live under these conditions. If you choose a native tree, this is
          always a good idea, but keep in mind that many frost-hardy species
          need frost protection when planted in shallow containers.
        </Text>

        <SubSubtitle>Selecting an Outdoor Bonsai Tree</SubSubtitle>
        <Text>
          When selecting a tree species to be kept outdoors, consider your local
          climate, the conditions of your garden, and of course, your personal
          preferences.
        </Text>

        <SubSubtitle>Your Local Climate</SubSubtitle>
        <Text>
          If you live in a subtropical or Mediterranean climate, you can grow
          many species outdoors that cannot endure frost, though some must be
          protected from excessive heat and sunlight. Trees like the Olive (Olea
          europea), Pomegranate (Punica granatum), and Chinese elm (Ulmus
          parvifolia) are ideal for these regions.
        </Text>

        <ImageWrapper>
          <Image
            src={OutddorBonsai01}
            alt="Popular outdoor Bonsai trees; Juniper, Pine tree, and Japanese maple"
          />
          <ImageCaption>
            Popular outdoor Bonsai trees; Juniper, Pine tree, and Japanese
            maple.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <SubSubtitle>Conditions Specific to Your Balcony/Garden</SubSubtitle>
        <Text>
          Consider your garden's or balcony's special conditions. If you have
          full sun, you can choose from many species but may need shade nets for
          sensitive ones. A garden with grass and shrubs will have higher air
          humidity, which benefits your Bonsai.
        </Text>

        <SubSubtitle>Personal Taste</SubSubtitle>
        <Text>
          Your personal taste also matters! Some people love flowering trees
          like the Azalea, while others prefer the classic Juniper or Pine
          Bonsai. Just make sure the species you choose can thrive in your
          specific conditions.
        </Text>
        <Spacer />

        <Subtitle>Outdoor Bonsai Tree Care</Subtitle>
        <Text>
          Caring for an outdoor Bonsai tree is different from regular potted
          plants. Since Bonsai trees are planted in small pots with limited
          space, special attention is needed, particularly regarding winter
          dormancy and frost protection.
        </Text>

        <SubSubtitle>Specific Care of Outdoor Bonsai Species</SubSubtitle>

        <SubSubtitle>1. Light</SubSubtitle>
        <Text>
          Most outdoor Bonsai trees need several hours of sunlight daily.
          Without it, their growth will become too weak, and they’ll be prone to
          pests and diseases.
        </Text>

        <SubSubtitle>2. Humidity</SubSubtitle>
        <Text>
          On hot days or in a paved area surrounded by walls, trees can suffer
          from low humidity. To increase it, place your Bonsai on a humidity
          tray or mist it regularly.
        </Text>

        <SubSubtitle>3. Watering and Fertilizing</SubSubtitle>
        <Text>
          Never water on a strict routine. Monitor your tree and water only when
          necessary. Depending on the weather, species, and size, watering needs
          will vary.
        </Text>

        <SubSubtitle>4. Temperature</SubSubtitle>
        <Text>
          Outdoor trees can endure high temperatures and cold winters if
          properly protected. Ensure frost protection during winter and avoid
          exposing the trees to light night frost during spring.
        </Text>

        <Text>
          To summarize, choose the right species and follow the care guidelines
          for outdoor trees, and your Bonsai will thrive!
        </Text>

        <DividerLine />

        <Title>Watering Bonsai Trees</Title>
        <Text>How to water your trees</Text>

        <Subtitle>How often should I water my Bonsai?</Subtitle>
        <Text>
          The frequency of watering depends on various factors. It's best to
          observe each tree individually and adjust watering accordingly. Ensure
          the soil is slightly dry before watering.
        </Text>

        <SubSubtitle>
          Water your trees when the soil gets slightly dry
        </SubSubtitle>
        <Text>
          Use your fingers to check the moisture depth of about 1 cm. If it
          feels slightly dry, water your tree. As you gain experience, you’ll
          easily know when it needs watering.
        </Text>

        <SubSubtitle>Never water on a routine</SubSubtitle>
        <Text>
          Avoid following a daily watering routine. Instead, observe each
          Bonsai's specific needs and adjust the watering schedule accordingly.
        </Text>

        <Text>
          Ensure you're using the right soil mix for optimal moisture retention.
          The best mix includes akadama, pumice, and lava rock in a ½ to ¼ to ¼
          ratio.
        </Text>

        <ImageWrapper>
          <Image
            src={WateringBonsai01} // replace with appropriate image source
            alt="Watering Bonsai"
          />
          <ImageCaption>
            Proper watering ensures your Bonsai thrives.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <Subtitle>When?</Subtitle>
        <Text>
          Water your Bonsai when the soil is slightly dry, regardless of the
          time of day. Avoid using cold water when the soil is warm, but don't
          worry too much about timing.
        </Text>

        <Subtitle>How to water Bonsai trees?</Subtitle>
        <Text>
          To thoroughly soak the root system, water your Bonsai until water runs
          out from the drainage holes. Repeat if necessary after a few minutes.
        </Text>
        <Spacer />

        <ImageWrapper>
          <Image
            src={WateringBonsai02} // replace with appropriate image source
            alt="Watering Bonsai"
          />
          <ImageCaption>
            Ensure thorough watering for healthy roots.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <Subtitle>Conclusion</Subtitle>
        <Text>
          Keep your Bonsai tree hydrated without letting it dry out completely.
          Water thoroughly once the soil feels slightly dry, ensuring the entire
          root mass gets soaked.
        </Text>

        <DividerLine />

        <Title>Fertilizing Bonsai</Title>
        <Text>Properly feeding your Bonsai for healthy growth</Text>

        <Subtitle>The Basic Components of Fertilizer</Subtitle>
        <Text>
          Fertilizer contains three primary elements: Nitrogen (N), Phosphorus
          (P), and Potassium (K). Nitrogen encourages leaf and stem growth,
          phosphorus aids in root development, and potassium promotes overall
          health.
        </Text>

        <Subtitle>When should I apply fertilizer?</Subtitle>
        <Text>
          Fertilize your Bonsai during the growing season (spring to fall).
          Indoor trees can be fertilized year-round, though frequency may
          decrease for older trees.
        </Text>

        <ImageWrapper>
          <Image
            src={FertilizerBonsai01} // replace with appropriate image source
            alt="Biogold organic fertilizer"
          />
          <ImageCaption>
            Biogold is a popular organic fertilizer among Bonsai enthusiasts.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <Subtitle>Which fertilizer to choose?</Subtitle>
        <Text>
          Choosing the right fertilizer for your Bonsai plants and applying it
          in the correct quantities is crucial for their health and development.
          For outdoor Bonsai, a fertilizer with a relatively high Nitrogen
          content, like NPK 10:6:6, is ideal in spring. In summer, a more
          balanced fertilizer, such as NPK 6:6:6, is optimal, while a low
          Nitrogen fertilizer, like NPK 3:6:6, is recommended for autumn. Many
          experts now suggest using a balanced fertilizer throughout the growing
          season, gradually decreasing the amount towards the end.
        </Text>
        <Text>
          The type of fertilizer you choose should also align with the
          developmental stage of your Bonsai. For Bonsai in early development,
          strong growth is desired, so a relatively strong fertilizer is
          necessary. For Bonsai in late development, a balanced fertilizer is
          better suited to encourage balanced growth and fine ramification.
        </Text>
        <Text>
          Subtropical tree species, often kept indoors, grow year-round and
          don't experience seasonal changes. These Bonsai need consistent
          fertilization, and a balanced liquid fertilizer is ideal. Be sure to
          follow the guidelines provided on the product packaging.
        </Text>
        <Text>
          Some exceptions apply when selecting fertilizer ratios. For example, a
          high Phosphorous fertilizer like NPK 6:10:6 can encourage flowering
          growth. For older or more mature Bonsai, a fertilizer with slightly
          lower Nitrogen content or reduced amounts may be more beneficial.
          Fertilizers purchased from specialized Bonsai stores often offer the
          right NPK values for optimal growth, but any fertilizer with the
          correct balance will suffice. There are many types of fertilizers
          available, including liquid, solid, synthetic, and organic. Regardless
          of the type, it is essential to follow the product's application
          instructions carefully.
        </Text>
        <DoubleImage>
          <ImageWrapper>
            <Image
              src={FertilizerBonsai02} // replace with appropriate image source
              alt="Bonsai Fertilizer"
            />
            <ImageCaption>
              Solid and liquid Bonsai fertilizers are both great options.
            </ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src={FertilizerBonsai03} // replace with appropriate image source
              alt="Bonsai Fertilizer"
            />
            <ImageCaption>
              Solid and liquid Bonsai fertilizers are both great options.
            </ImageCaption>
          </ImageWrapper>
        </DoubleImage>

        <Subtitle>How much fertilizer should I apply?</Subtitle>
        <Text>
          Follow the guidelines on the fertilizer packaging. Be careful not to
          overfeed your Bonsai, as this can negatively affect its health.
        </Text>

        <DividerLine />

        <Title>Repotting Bonsai</Title>
        <Subtitle>How to Repot Your Bonsai Tree</Subtitle>
        <Text>
          Repotting your Bonsai is essential to ensure it doesn’t become
          pot-bound, a condition that can starve the tree. Over time, the tree’s
          roots take up the available space in the pot and grow to match its
          shape. Without enough room and nutrients, the Bonsai will stop growing
          and eventually perish. Repotting gives the tree access to fresh
          nutrients, promoting growth and health.
        </Text>

        <Subtitle>How Often Should I Repot a Bonsai?</Subtitle>
        <Text>
          The frequency of repotting depends on the size of the pot and the
          species of the Bonsai. Fast-growing varieties need repotting every two
          years, sometimes even sooner. Older trees require repotting every
          three to five years. Repotting should not be a routine task; check
          your Bonsai every early spring by gently removing it from its pot. If
          the roots are circling around the root mass, it’s time to repot. If
          the roots are still contained within the soil, leave it and check
          again the following year.
        </Text>

        <Text>
          Many indoor Bonsai are planted in organic soil that retains excess
          water, potentially leading to root rot and other issues. If you
          purchase a tree in this type of soil, make sure to repot it with a
          proper Bonsai substrate in the next early spring or fall.
        </Text>

        <ImageWrapper>
          <Image
            src={RepottingBonsai01}
            alt="This tree needs to be repotted as the roots circle around the root mass."
          />
          <ImageCaption>
            This tree needs to be repotted as the roots circle around the root
            mass.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <SubSubtitle>When to Repot?</SubSubtitle>
        <Text>
          The ideal time to repot a Bonsai is early spring, while the tree is
          still dormant and the buds begin to swell. At this stage, the tree is
          not actively growing foliage, so repotting will cause minimal stress.
          Repotting in spring also ensures that any root system damage is
          quickly repaired once the tree starts growing. Some species may also
          tolerate repotting in the fall, but never attempt repotting in summer
          or winter.
        </Text>

        <DividerLine />

        <Title>Bonsai Soil</Title>
        <Text>
          Choosing the right soil mix is crucial for your Bonsai’s health. The
          soil must drain well to prevent root rot, while retaining enough
          moisture to hydrate the tree. While some species may require special
          mixes, a typical Bonsai soil mix for most species consists of Akadama,
          pumice, and lava rock in a 1:1:1 ratio.
        </Text>

        <Title>Bonsai Substrate</Title>
        <Text>
          The quality of the soil directly affects your tree's health. Many
          unhealthy Bonsai are planted in poor-quality soils or, worse, regular
          garden soil. These soils dry out too easily, which can harm the tree's
          growth and make watering difficult.
        </Text>

        <SubSubtitle>Good Water-Retention</SubSubtitle>
        <Text>
          The soil must be able to absorb and retain enough water to keep the
          Bonsai hydrated between waterings. However, excessive water retention
          can harm the tree.
        </Text>

        <SubSubtitle>Good Drainage</SubSubtitle>
        <Text>
          Excess water should be able to drain immediately from the pot. Poor
          drainage leads to root rot and unhealthy trees. Inadequate drainage
          also reduces aeration and can cause salt buildup in the soil.
        </Text>

        <SubSubtitle>Good Aeration</SubSubtitle>
        <Text>
          The soil particles should be large enough to create air pockets
          between them. These gaps provide oxygen for the roots and allow
          beneficial bacteria and mycorrhizae to thrive, helping the tree
          process nutrients efficiently.
        </Text>

        <Subtitle>Organic vs. Inorganic Soils</Subtitle>
        <Text>
          Bonsai soils are categorized as organic or inorganic. Organic
          components like peat, leaf litter, or bark break down over time, which
          can reduce drainage. If you prefer organic soil, we recommend using
          pine bark as a component. Inorganic components, like volcanic lava or
          fired clays, offer excellent drainage and aeration but retain fewer
          nutrients and moisture.
        </Text>

        <Text>
          Organic soils often retain too much water when dry, which can harm
          Bonsai trees. Inorganic soils provide better control over water and
          nutrient levels, supporting the tree's health more effectively.
        </Text>

        <Subtitle>Soil Components</Subtitle>
        <Text>
          Common components for Bonsai soil mixtures include Akadama, pumice,
          lava rock, organic potting compost, and fine gravel (also known as
          grit).
        </Text>

        <ImageWrapper>
          <Image
            src={SubstratesBonsai01}
            alt="From left to right: organic potting compost, Akadama, Pumice, and Lava Rock"
          />
          <ImageCaption>
            From left to right; organic potting compost, Akadama, Pumice, and
            Lava Rock.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          <BoldText>Akadama</BoldText> is a Japanese clay specifically produced
          for Bonsai, and it requires sifting before use. After a couple of
          years, it breaks down, so it’s important to mix it with well-draining
          components. It can be replaced with similar clays available at garden
          centers or even cat litter.
        </Text>

        <Text>
          <BoldText>Pumice</BoldText> is a volcanic rock that helps retain water
          and nutrients, promoting root development in Bonsai trees.
        </Text>

        <Text>
          <BoldText>Lava Rock</BoldText> aids in water retention and improves
          soil structure, though roots cannot grow into it.
        </Text>

        <Text>
          <BoldText>Organic Potting Compost</BoldText> consists of peat moss,
          perlite, and sand. Alone, it retains too much water and doesn’t
          provide good aeration. However, it works well when mixed with other
          components.
        </Text>

        <Text>
          <BoldText>Fine Gravel / Grit</BoldText> is used for drainage and
          aeration in Bonsai soil, often added as a bottom layer in pots.
          However, many experts have moved away from using it, preferring a mix
          of Akadama, pumice, and lava rock.
        </Text>
        <Spacer />

        <Subtitle>Recommended Bonsai Soil Mixtures</Subtitle>
        <Text>
          Different species require different soil mixtures, so consult our tree
          species guide for the optimal mix for your tree. However, we commonly
          use two mixes for deciduous and coniferous trees:
        </Text>

        <DoubleGraph>
          <div>
            <SubSubtitle>Deciduous Bonsai Soil</SubSubtitle>
            <StyledList>
              <li>- 50% Akadama</li>
              <li>- 25% Pumice</li>
              <li>- 25% Lava Rock</li>
            </StyledList>
          </div>
          <div>
            <SubSubtitle>Coniferous and Pine Soil</SubSubtitle>
            <StyledList>
              <li>- 33% Akadama</li>
              <li>- 33% Pumice</li>
              <li>- 33% Lava Rock</li>
            </StyledList>
          </div>
        </DoubleGraph>

        <DividerLine />

        <Title>Bonsai Pots</Title>
        <Text>
          Many different types of containers can serve as Bonsai pots, provided
          they meet certain criteria. The pot must have drainage holes, and
          ideally, wiring holes to secure the tree in place. Pots can be made
          from various materials such as ceramic, concrete, plastic, and certain
          metals (though some metals may release toxins). It’s also possible to
          craft your own pots. However, a traditional Bonsai pot is typically
          made of ceramic or porcelain, specifically fired stoneware, which
          allows it to absorb minimal water and retain none within the material.
          This feature is essential for maintaining the health of the tree.
        </Text>
        <Text>
          The health of the Bonsai comes first! A mature Bonsai often requires
          years of careful training, gradually adjusting its root system to fit
          into progressively smaller pots through regular repotting. As you may
          know, the art of Bonsai is a practice of patience and dedication,
          which certainly extends to the process of choosing the right pot. The
          most critical factor when selecting a pot is ensuring the correct
          size, particularly the pot's depth. In this article, we’ll explore the
          various aspects of selecting the perfect pot for your Bonsai tree.
        </Text>

        <ImageWrapper>
          <Image
            src={PotBonsai01}
            alt="Maple Bonsai in a Bonsai pot that really enhances the colors of the leaves."
          />
          <ImageCaption>
            Maple Bonsai in a Bonsai pot that really enhances the colors of the
            leaves.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <Subtitle>How to Choose a Pot</Subtitle>
        <Text>
          Choosing the right pot involves understanding your tree's masculine or
          feminine characteristics, the appropriate size, and the overall
          design. The pot should harmonize with the tree, enhancing its beauty
          and character.
        </Text>

        <Subtitle>Masculine or Feminine</Subtitle>
        <Text>
          A tree’s characteristics, such as its trunk, bark, and branches, help
          determine whether it is more masculine or feminine. Masculine trees
          have thick trunks, rugged bark, and dense branches, while feminine
          trees have graceful curves and fine branches.
        </Text>

        <Subtitle>Size</Subtitle>
        <Text>
          The pot's height should generally match the width of the tree's trunk
          above the surface roots. Oval or rectangular pots are usually 2/3 the
          height of the tree, while round or square pots should be 1/3 the
          height.
        </Text>

        <Subtitle>Design</Subtitle>
        <Text>
          The design of the pot should match the tree’s gender characteristics.
          Masculine pots tend to be angular, deep, and heavy, while feminine
          pots have softer lines and delicate feet. Choose a pot that
          complements your tree’s style.
        </Text>

        <ImageWrapper>
          <Image
            src={PotBonsai02}
            alt="An unglazed Bonsai pot with round shapes."
          />
          <ImageCaption>An unglazed Bonsai pot with round shapes.</ImageCaption>
        </ImageWrapper>
        <Spacer />
        <Subtitle>The Design of a Bonsai Pot</Subtitle>
        <Text>
          Generally, masculine pots are deep, angular, have clean lines, and
          stout feet. A lip on the rim strengthens the masculinity, while an
          inward rhyme reinforces the pot's femininity. Feminine pots often have
          soft lines, delicate feet, and are relatively low and sleek. Round
          pots and drum pots are generally considered to be androgynous.
        </Text>

        <Text>
          The most general rule when it comes to pot selection and choosing the
          glaze for a pot is that the color should appear in the tree, either in
          the bark, the color of the leaves, or in the fruit or flowers.
          Unglazed brown, gray, and earth tones are usually safe choices, as
          they provide warmth and stability to the Bonsai tree. However,
          contrasting colors like blue or cool green can also work well,
          providing balance and refreshing the composition.
        </Text>

        <Text>
          The goal is to create harmony. Observe the choices others have made
          for their pots, discuss with others, visit exhibitions, go to shows,
          and read books. Do not hesitate to contact a potter; we are used to
          drawing sketches and submitting proposals for a pot that would suit
          your tree. Remember that there is not only one fitting choice of pot
          for your tree. There are usually multiple options, and what is best is
          a matter of your taste. Ultimately, you should be the one happy with
          your choice.
        </Text>

        <Subtitle>Where to Buy Bonsai Pots</Subtitle>
        <Text>
          When you think your tree is ready, there are several ways to find a
          pot. You can contact a potter and make a custom order, visit your
          local Bonsai nursery, fairs, and Bonsai events, where potters are
          often trading. Make sure to bring the measurements of your tree and a
          photo. If you're experienced, there are many auction sites and social
          media groups where pots change owners. You can even make your own pot,
          as there are plenty of YouTube videos showing how to create a pot from
          different materials.
        </Text>

        <Subtitle>Some Examples</Subtitle>
        <Text>
          Let's investigate a few examples of selecting the right pot for a
          tree. Often, rules are broken.
        </Text>

        <ImageWrapper>
          <img src={PotBonsai03} alt="Bonsai example" />
          <ImageCaption>
            Bonsai with a large pot that complements the tree's crown size and
            color.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          Size equals health. According to basic rules, a pot should not be more
          than 2/3 the height of the tree. However, in this case, the pot
          deviates from this rule because the crown is so large, almost as wide
          as it is high. The large pot is needed not only for aesthetics and
          balance but also because the tree's branches correspond to a large
          root system that needs space. The yellow pot enhances and amplifies
          the red leaves of autumn.
        </Text>

        <ImageWrapper>
          <img
            src={PotBonsai04}
            alt="Bonsai example with a pot following the 2/3 rule"
          />
          <ImageCaption>
            Example of following the 2/3 rule for pot width.
          </ImageCaption>
        </ImageWrapper>

        <Spacer />

        <SubSubtitle>Case Studies: Masculine vs Feminine</SubSubtitle>
        <ImageWrapper>
          <img src={PotBonsai05} alt="Masculine Bonsai" />
          <ImageCaption>
            Masculine Bonsai with clean lines and stout feet pot.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          This is a textbook example of the perfect combination of pot and tree.
          The composition exudes masculinity. The sparse branches and thick,
          scarred bark perfectly match the pot, which has clean, straight lines
          and stable feet. The rim's lip opens up and symbolizes, strengthens,
          the male outpouring force, opposite to the feminine bent inward,
          closing. Instead of a traditional unglazed terracotta red, a red glaze
          has been used to complement the pine's red-orange flesh tones.
        </Text>

        <ImageWrapper>
          <img src={PotBonsai06} alt="Feminine Bonsai" />
          <ImageCaption>
            Feminine Bonsai with curved pot sides complementing the trunk.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          This would likely be my choice of pot if I were assigned to this tree.
          The curved sides complement the gently curved trunk and give the
          composition a more feminine charisma.
        </Text>

        <ImageWrapper>
          <img
            src={PotBonsai07}
            alt="Bonsai with a combination of masculine and feminine pot"
          />
          <ImageCaption>
            Combination of masculine feet with a more feminine curved pot.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          Here, we've removed the male lip of the pot. Note that the masculine,
          massive feet remain. I find this an interesting combination. The tree,
          unlike the first image where the tree had a temple-like pot, now seems
          to be standing on top of a "hill." The sac-like pot gives the
          impression of "strangling" the tree's shape. But this example clearly
          shows that there is more femininity in the tree than initially meets
          the eye.
        </Text>

        <Spacer />

        <Subtitle>Case Studies: Forest Planting</Subtitle>
        <ImageWrapper>
          <img src={PotBonsai08} alt="Forest Planting Bonsai" />
          <ImageCaption>
            Forest planting Bonsai with an oval pot that enhances the grace of
            the trees.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          This legendary composition, well-known in Bonsai circles as "protector
          of the spirit," has a long history and represents the creator's
          grandchildren. The choice of pot reflects this. An oval shape is ideal
          for forest planting. The mahogany red waxed surface is reminiscent of
          antique furniture and gives the tree grace and history. The pot itself
          is a valuable vessel that enhances the age and royalty of the trees
          without drawing attention away from them. There is no other option but
          an oval pot for this composition, although it would have worked with
          an unglazed red or glazed with earth tones.
        </Text>

        <Spacer />

        <Subtitle>Case Studies: Seasonal Colors</Subtitle>
        <ImageWrapper>
          <img src={PotBonsai09} alt="Seasonal colors of a Bonsai tree" />
          <ImageCaption>
            Deciduous Bonsai with a pot reflecting seasonal changes.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          If you have a deciduous tree whose colors change with the seasons, you
          might want to have a pot that suits all stages of its colors. It’s
          easiest to choose a color that reflects the bark, such as gray.
          However, you can also find a tone that matches the leaves or choose an
          anonymous color like light brown or unglazed.
        </Text>

        <ImageWrapper>
          <img src={PotBonsai10} alt="Bonsai with a contrasting color pot" />
          <ImageCaption>
            Bonsai with a pot that contrasts with the tree's seasonal colors.
          </ImageCaption>
        </ImageWrapper>

        <Text>
          Alternatively, you can choose a contrasting color, such as blue, or as
          in this example, a mottled glaze with red, green, and yellow tones.
        </Text>

        <DividerLine />

        <Title>Pests and Diseases</Title>
        <Text>Common Mistakes in Bonsai Care</Text>

        <Text>
          Like any other living plant, Bonsai trees can be infected by pests or
          diseases. However, when your trees are healthy and properly cared for,
          the risk of infection is minimized.
        </Text>

        <Subtitle>Identifying Bonsai Pests and Diseases</Subtitle>
        <Text>
          Proper Bonsai care involves using the right soil mixture, knowing how
          and when to water, avoiding over or under fertilization, and ensuring
          your Bonsai is placed correctly. Although healthy trees are less
          likely to get infected, they can still fall victim to pests or
          diseases.
        </Text>

        <Text>
          Since it is often hard to identify the problem, you might want to take
          pictures and ask for help in our Bonsai forum. Here are some common
          problems people encounter with their Bonsai trees:
        </Text>

        <Subtitle>Dying Leaves on Bonsai</Subtitle>
        <Text>
          Leaves suddenly turn yellow and fall off the tree. This is often the
          result of a sudden lack of water. When leaves slowly turn yellow and
          die, it is most often the result of sustained overwatering,
          overfeeding, or underfeeding.
        </Text>

        <Subtitle>Viruses and Fungi</Subtitle>
        <Text>
          Viruses can be detected by discolored leaves and sudden dieback of
          branches. Place the infected tree separately from your other trees to
          prevent cross-contamination. Treat by removing infected parts and
          applying a fungicide spray.
        </Text>

        <Subtitle>Insects Often Found on Bonsai</Subtitle>
        <Text>
          Try to identify the insects by photographing them and asking for
          advice on an online Bonsai forum, or by comparing them with the
          pictures below. Once identified, purchase an insecticide (either
          chemical or organic) to treat the tree. Be sure to follow the
          instructions carefully, and consider starting with half the
          recommended dose before increasing it if necessary.
        </Text>
      </Container>
    </PageWrapper>
  );
};

export default BonsaiCare;
