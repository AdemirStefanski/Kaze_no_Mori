import React from "react";
import {
  PageWrapper,
  Container,
  BigTitle,
  Title,
  Subtitle,
  SubSubtitle,
  Text,
  BoldText,
  ImageWrapper,
  Image,
  ImageWrapperChina,
  ImageChina,
  TitleMid,
  ImageCaption,
  Spacer,
} from "./styles"; // Ajuste o caminho conforme necessário

import Header from "../../components/header";

import BonsaiChina from "../../assets/images/bonsaiHistory/ForumDePicture.jpg";
import BonsaiJapan from "../../assets/images/bonsaiHistory/what-is-bonsai-01.jpg";
import BonsaiKokufu from "../../assets/images/bonsaiHistory/Kokufu1934.jpg";

const BonsaiHistory: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <BigTitle>History of Bonsai</BigTitle>

        <Subtitle>History and origin of Bonsai</Subtitle>
        <Spacer />

        <Subtitle>The origin of Bonsai</Subtitle>
        <Text>
          Although the word <BoldText>‘Bon-sai’</BoldText> is Japanese, the art
          it describes originated in the Chinese empire. By the year 700 AD, the
          Chinese had started the art of ‘pun-sai’ using special techniques to
          grow dwarf trees in containers.
        </Text>

        <Text>
          Originally only the elite of the society practiced pun-tsai with
          native-collected specimens and the trees where spread throughout China
          as luxurious gifts. During the Kamakura period, the period in which
          Japan adopted most of China’s cultural trademarks, the art of growing
          trees in containers was introduced into Japan. The Japanese developed
          Bonsai along certain lines due to the influence of Zen Buddhism and
          the fact that Japan is only 4% the size of mainland China. The range
          of landscape forms was thus much more limited. Many well-known
          techniques, styles and tools were developed in Japan from Chinese
          originals. Although known to a limited extent outside Asia for three
          centuries, only recently has Bonsai truly been spread outside its
          homelands.
        </Text>
        <Spacer />

        <Subtitle>History of Bonsai in China</Subtitle>
        <Text>
          Shallow basins or flattened bowls – “pen” or “pan” or “pun” – had been
          made out of earthenware in what we now call China since about 5,000
          years ago. A thousand years later during the Chinese Bronze Age, these
          were among the chosen shapes to be recreated in bronze for religious
          and political ceremonial purposes. About 2,300 years ago, the Chinese
          Five Agents Theory (water, fire, wood, metal, and earth) spun off the
          idea of the potency of replicas in miniature. By recreating a
          mountain, for example, on a reduced scale, a student could focus on
          its magical properties and gain access to them. The further the
          reproduction was in size from the original, the more magically potent
          it was likely to be. Two hundred years later, importations of new
          aromatics and incenses took place under the Han Emperor because of
          newly opened trading with its neighbors. A new type of vessel was
          created, incense burners in the form of the mountain peaks which rose
          above the waves and symbolized the abodes of the Immortals, the
          then-popular idea of the mythic Islands of the Blessed. Primarily
          crafted out of bronze, ceramic or gilded bronze, some of these burners
          rested on small pen dishes to either catch hot embers or to hold a
          miniature symbolic ocean. The removable lids to these burners often
          were covered in stylized portrayals of legendary figures climbing the
          sides of forested hills. From the perforations in the lids the incense
          smoke arose out of the cave openings like the mystic vapors in the
          full-size mountains. It is thought that some later lids made out of
          stone may have been found with lichens or moss already attached –
          natural miniature landscapes.
        </Text>

        <TitleMid>
          The idea of the potency of replicas in miniature date back 2300 years
          in China
        </TitleMid>

        <ImageWrapperChina>
          <ImageChina src={BonsaiChina} alt="Ancient Chinese Bonsai" />
          <ImageCaption>
            Miniature landscape from Gothaer Penjing Album, Canton, c.1800, for
            export to Europe
          </ImageCaption>
        </ImageWrapperChina>
        <Spacer />

        <Subtitle>History of Bonsai in Japan</Subtitle>
        <Text>
          It is believed that the first tray landscapes were brought from China
          to Japan at least twelve hundred years ago (as religious souvenirs). A
          thousand years ago, the first lengthy work of fiction in Japanese
          included this passage: “A [full-size] tree that is left growing in its
          natural state is a crude thing. It is only when it is kept close to
          human beings who fashion it with loving care that its shape and style
          acquire the ability to move one".
        </Text>
        <Text>
          The first graphic portrayals of these in Japan were not made until
          about eight hundred years ago. All things Chinese fascinated the
          Japanese, and at some point the Chinese Chan Buddhism (Indian
          meditative Dyhana Buddhism crossed with native Chinese Daoism) also
          was imported and became Zen Buddhism in Japan. Finding beauty in
          severe austerity, Zen monks – with less land forms as a model --
          developed their tray landscapes along certain lines so that a single
          tree in a pot could represent the universe. The Japanese pots were
          generally deeper than those from the mainland, and the resulting
          gardening form was called hachi-no-ki, literally, the bowl's tree. A
          folktale from the late 1300s, about an impoverished samurai who
          sacrificed his last three dwarf potted trees to provide warmth for a
          traveling monk on a cold winter night, became a popular Noh theatre
          play, and images from the story would be depicted in a number of media
          forms, including woodblock prints, through the centuries.
        </Text>

        <ImageWrapper>
          <Image
            src={BonsaiJapan}
            alt='Bonsai "Akirafutokoro Prince" (706 AD). Source: Ritsumeikan University.'
          />
          <ImageCaption>
            Bonsai "Akirafutokoro Prince" (706 AD). Source: Ritsumeikan
            University.
          </ImageCaption>
        </ImageWrapper>
        <Spacer />

        <Text>
          Everyone from the military leader shoguns to ordinary peasant people
          grew some form of tree or azalea in a pot or abalone shell. By the
          late eighteenth century a show for traditional pine dwarf potted trees
          was begun to be held annually in the capital city of Kyoto.
          Connoisseurs from five provinces and the neighboring areas would bring
          one or two plants each to the show in order to submit them to the
          visitors for ranking or judging. The town of Takamatsu (home of
          Kinashi Bonsai village) was already growing fields of partly-shaped
          dwarf pines for a major source of income.
        </Text>
        <Text>
          Around the year 1800, a group of scholars of the Chinese arts gathered
          near the city of Osaka to discuss recent styles in miniature trees.
          Their dwarf trees were renamed as “Bonsai” (the Japanese pronunciation
          of the Chinese term pun-tsai) in order to differentiate them from the
          ordinary hachi-no-ki which many persons cared for. The bon or pen is
          shallower than the Hachi bowl. This shows that at least some growers
          had better success with the horticultural needs of dwarf potted trees
          in smaller containers. Bonsai was now seen as a matter of design, the
          craft approach replacing the religious/mythical approach of tradition.
        </Text>
        <Text>
          Different sizes and styles were developed over the next century;
          catalogs and books about the trees, tools, and pots were published;
          some early formal shows were held. Copper and iron wire replaced hemp
          fibers for shaping the trees. Containers mass-produced in China were
          made to Japanese specifications and the number of hobbyists grew.
        </Text>

        <ImageWrapperChina>
          <ImageChina
            src={BonsaiKokufu}
            alt="At the second Kokufu Bonsai Ten, December 1934"
          />
          <ImageCaption>
            At the second Kokufu Bonsai Ten, December 1934
          </ImageCaption>
        </ImageWrapperChina>

        <Text>
          Following the Great Kanto Earthquake which devastated the Tokyo area
          in 1923, a group of thirty families of professional growers resettled
          twenty miles away in Omiya and set up what would become the center of
          Japanese Bonsai culture; Omiya Bonsai village. In the 1930s as formal
          displays of Bonsai became recognized, an official annual show was
          allowed at Tokyo's Metropolitan Museum of Art.
        </Text>
        <Text>
          The long recovery from the Pacific War saw Bonsai become mature and
          cultivated as an important native art. Apprenticeship programs,
          greater numbers of shows, books and magazines, and classes for
          foreigners spread the word. The use of custom power tools matched with
          an intricate knowledge of plant physiology allowed a few masters to
          move from the craft approach to a truly artistic-designing phase of
          the art.
        </Text>
        <Text>
          Recently, Bonsai – seen too often as just a tired pastime for the
          elderly – now even has a version becoming popular among the younger
          generation with easy-to-care-for mini-trees and landscapes, unwired
          and wilder-looking, using native plants.
        </Text>
        <Spacer />

        <Subtitle>History of Bonsai in the West</Subtitle>
        <Text>
          In 1604, there was a description in Spanish of how Chinese immigrants
          in the tropical islands of the Philippines were growing small ficus
          trees onto hand-sized pieces of coral. The earliest-known English
          observation of dwarf potted trees (root-over-rock in a pan) in
          China/Macau was recorded in 1637. Subsequent reports during the next
          century also from Japan were root-over-rock specimens. Dozens of
          travelers included some mention of dwarf trees in their accounts from
          Japan or China. Many of these were repeated in book reviews and
          excerpted articles in widely distributed magazines. Japanese dwarf
          trees were in the Philadelphia Exposition in 1876, the Paris
          Expositions of 1878 and 1889, the Chicago Expo of 1893, the St. Louis
          World's Fair of 1904, the 1910 Japan-Britain Exhibition, and at the
          1915 San Francisco Exposition.
        </Text>

        <Text>
          The first European language book (French) entirely about Japanese
          dwarf trees was published in 1902, and the first in English in 1940.
          Yoshimura and Halford's Miniature Trees and Landscapes was published
          in 1957. It would become known as "Bible of Bonsai in the West," with
          Yuji Yoshimura being the direct link between Japanese classical Bonsai
          art and progressive Western approach which resulted in elegant,
          refined adaptation for the modern world. John Naka from California
          extended this sharing by teaching in person and in print first in
          America, and then around the world further emphasizing the use of
          native material.
        </Text>
        <Text>
          It was by this time that the West was being introduced to landscapes
          from Japan known as saikei and a resurgence from China as Penjing.
          Compositions with more than a single type of tree became accepted and
          recognized as legitimate creations.
        </Text>

        <TitleMid>Bonsai spread to the West in the late 19th century</TitleMid>

        <Text>
          Over the years, slight innovations and improvements have been
          developed, primarily in the revered old Bonsai nurseries in Japan, and
          these have been brought over bit-by-bit to our countries by visiting
          teachers or returning traveler enthusiasts. Upon their return Japan,
          teachers would immediately try out a new technique or two in front of
          students at previously scheduled workshops. The new Japanese
          techniques could then be disseminated further and this living art form
          continued to be developed.
        </Text>

        <Text>
          Most of the earlier books in European languages, for the most part,
          leaned more towards basic horticultural knowledge and techniques for
          keeping the trees alive. Western science has been increasing our
          awareness of the needs and processes of the living trees and other
          plants in our compositions. At the same time, published material has
          shifted towards explaining the aesthetics involved in styling and
          shaping. Large permanent collections began to be increasingly set up
          around the world, including Scotland, Hungary, Australia, and Korea,
          and numerous shows, exhibitions and conventions became annual events
          for enthusiasts and the general public.
        </Text>

        <Text>
          The Karate Kid movies were released. In their own way they spurred
          many young people to investigate our art/hobby. Read more about Bonsai
          in the Karate Kid movie.
        </Text>

        <Text>
          "Mica pots" originated by this time out of Korea and independent
          potters were trying their hands at making ceramic pots, including
          non-standard designs. In 1992 the first Internet Bonsai website was
          started with the alt.Bonsai newsgroup and the next year saw
          rec.arts.Bonsai, the forerunner of the Internet Bonsai Club. The first
          Bonsai club website came about less than three years later.
        </Text>
        <Spacer />

        <Subtitle>Conclusion</Subtitle>
        <Text>
          There are over 1200 books in 26 languages about Bonsai and related
          arts. There have been over 50 print periodicals in various tongues,
          and five on-line magazines just in English. Hundreds of web sites,
          over a hundred each discussion forums, on-line club newsletters, and
          blogs can be studied. Constantly popping up are references on TV, in
          movies and commercials, and general fiction and non-fiction. This is
          truly a worldwide interest with an estimated thousand clubs meeting
          anywhere from once a year to two or three times per month, all with
          their share of politics, personalities and passions. Membership might
          be close to a hundred thousand in over a hundred counties and
          territories, with non-associated enthusiasts totaling perhaps ten
          million more.
        </Text>
        <Text>
          So the next time you prune a branch, wire it or re-pot your tree,
          reflect that what you are doing is continuing a thousand plus year
          tradition. In your own way you are exploring and composing a miniature
          version of your universe. Author: Robert J. Baran (Bonsai researcher
          and historian).
        </Text>
      </Container>
    </PageWrapper>
  );
};

export default BonsaiHistory;
