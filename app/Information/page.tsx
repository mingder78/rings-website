// app/about/page.tsx
import SocialIcons from "@/components/SocialMediaIcons";
//
export default function AboutPage() {
  return (
    <div className="font-ebgaramond flex w-auto bg-background text-foreground">
      {/* Main Content */}
      <main className=" px-4 sm:px-6 md:px-12">
        <div className=" grid sm:grid-cols-[3fr_1fr] grid-cols-1">
          <div className="bg-red-0 pl-1 md:pl-60 grid-cols-1">
            <br />
            <div grid-row="" grid-pad="8" grid-gutter="16" grid-responsive="">
              <div grid-col="x12" grid-pad="8">
                <br />
                <br />
                <br />
                <br />
                Wang, Szu-Yi 王 思 懿
                <br />
                <br />
                <small>
                  1991, Taichung, Taiwan <br />
                  <br />
                </small>
                <small>
                  With the working experience of urban research—started from
                  Taipei—Szu-Yi Wang (TW) studied in Rotterdam and keeps
                  developing her practice as a spatial designer, artist, and
                  architectural researcher for projects from site-specific
                  subjects to intercultural dialogues.
                  <br />
                  <br />
                  She takes ‘the interior’ as a lens looking into intimate,
                  flexible gestures toward spatial issues together with Hanzi
                  literature study as her visual-cultural research tool. While
                  contemplating the interplay between translation and
                  transformation, she condenses her unique sensibility into the
                  methodologies, forms, and aesthetics. From writing to
                  drawings, from paper sculptures to light-shadow installations,
                  her works are poetic and narrative; they are her inquiries
                  into more inclusive relationships between humans and nature,
                  space and time, urban landscape & the environment.
                  <br />
                  <br />
                  Currently based in Rotterdam, Netherlands.
                </small>
                <br />
                <br />
                <small></small>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <b>Practices </b>
                <br />
                <br />
                <small>
                  Szu-Yi develops her works in (but not limited to) the
                  following forms:
                  <br />
                  <br />
                  _ Inteiror, architectural design & modeling | spatial projects
                  in forms, (im)material & senses
                  <br />_ Artistic research & cultural narrative | narrative in
                  languages & other cultural encounters <br />_ Urban research
                  Drifting | ongoing research with strolls; involved in the
                  transformation of the city <br />_ Origami; craftsmanships |
                  paper folding; object collage; workshops <br />_ Immersive,
                  (im)material installation | light - shadow, water - air,
                  silence - emptiness <br />_ Moving drawing | coding,
                  performative art via multimedia
                  <br />
                  <br />
                  <hr />
                  <br />
                  <br />
                </small>
                <b>Clients & Collaborators</b>
                <br />
                <br />
                <br />
                <small>
                  Motel Mozaïque Festival / Parfum de Boemboem / TENT Rotterdam
                  / Studio MAKS / Crafts Council Nederland / And all other
                  wonderful creative workers
                </small>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <b>Contact</b>
                <br />
                <br />
                <br />
                <small>
                  Inquiries, collaborations, commissions or ideas in any forms,
                  please e-mail to szuyi.sywang[at]gmail.com or contact +31 6
                  57695341.
                  <br />
                  <br />
                  You could also find me on
                </small>
                <SocialIcons />
                <br />
                <br />
                <hr />
                <br />
                <br />
              </div>
            </div>
            <div className="bg-blue-0 pl-1 p-10">
              <img className="object-contain" src="portrait01a.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
