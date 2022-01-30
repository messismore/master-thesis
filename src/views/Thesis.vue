<script lang="ts">
import { defineComponent } from 'vue'

import BaseImage from '../components/base/BaseImage.vue'
import BaseCitation from '../components/base/BaseCitation.vue'

import HumansVsComputers from '../components/figures/HumansVsComputers.vue'
import OrganisationalKnowledge from '../components/figures/OrganisationalKnowledge.vue'

export default defineComponent({
  name: 'Thesis',
  components: {
    BaseImage,
    BaseCitation,
    HumansVsComputers,
    OrganisationalKnowledge,
  },
  props: {},
  inject: ['theme', 'literature'],
})
</script>

<style scoped lang="css">
* {
  font-family: v-bind('theme.fonts.body');
  max-width: v-bind('theme.space(15)');
  line-height: v-bind('theme.lineHeights.body');
  margin-bottom: 0;
  color: v-bind('theme.colours.text');
}

* + * {
  margin-top: v-bind('theme.space(0)');
}

a {
  color: v-bind('theme.colours.secondary');
}

cite::before {
  content: ' (';
}
cite::after {
  content: ') ';
}

comment {
  background: thistle;
  /*   display: none; */
}

main {
  margin: v-bind('theme.space(5)');
}

img {
  max-width: 100%;
  mix-blend-mode: screen;
  display: block;
}

picture {
  background: v-bind('theme.colours.primary');
  display: block;
  width: auto;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: v-bind('theme.fonts.heading');
  font-weight: v-bind('theme.fontWeights.heading');
  margin-top: v-bind('theme.space(5)');
}

ol,
ul,
p,
h6 {
  font-size: v-bind('theme.fontSizes(0)');
}

figure {
  margin-block: v-bind('theme.space(5)');
}

figcaption {
  font-size: v-bind('theme.fontSizes(-1)');
}

Footnote::before {
  content: ' [Footnote: ';
}
Footnote::after {
  content: '] ';
}

Footnote::before,
Footnote::after,
Footnote {
  font-style: italic;
}

h1 {
  font-size: v-bind('theme.fontSizes(5)');
  font-weight: v-bind('theme.fontWeights.body');
}
h2 {
  font-size: v-bind('theme.fontSizes(4)');
  font-weight: v-bind('theme.fontWeights.body');
}
h3 {
  font-size: v-bind('theme.fontSizes(3)');
}
h4 {
  font-size: v-bind('theme.fontSizes(2)');
}
h5 {
  font-size: v-bind('theme.fontSizes(1)');
}
.introduction {
  font-size: v-bind('theme.fontSizes(1)');
  line-height: v-bind('theme.lineHeights.body');
}
</style>

<template>
  <main>
    <h1>Speckle CI</h1>
    <h2>Motivation</h2>
    <Comment>Abstract</Comment>
    <p>
      This thesis explores the potential of networked, composable tools as a
      means to capture and distribute organisational knowledge. Drawing from the
      concept of
      <em>Continuous Integration</em>, a widely adopted collaboration strategy
      in software development making heavy use of automation, it proposes an
      automatisation platform for AEC workflows as a demonstrator of such a
      networked tool. I argue this will ultimately require a renegotiation of
      the relationship between architects and their tools and I speculate about
      a culture of toolmaking as a means to capture and evolve organisational
      knowledge.
    </p>

    <h3>Performance, Complexity, Precision</h3>

    <p>
      Architecture, and the built environment in general, share the paradoxical
      quality of being both accelerator and key to many of the overlapping and
      mutually reinforcing crises unfolding around us. In order to unlock its
      potential to store carbon rather than emit greenhouse gases, preserve
      biodiversity rather than devour habitats, and foster community rather than
      divide and displace vulnerable demographics, planners need to radically
      transform the way we design, build, operate, and recycle our built
      environment. Materialising this new sustainable, robust, and resilient
      architecture calls for new levels of precision while facilitating
      deliberate experimentation, the integration of unfamiliar and rapidly
      evolving areas of knowledge as well as the rediscovery and cultivation of
      old ones, and the navigation of unprecedented complexity in order to
      arrive at something simple.
    </p>

    <p>
      This collective learning process is interacting with and accelerating
      broader trends that affect not only the AEC industry, but knowledge work
      in general: 1. the drive to increase efficiencies, 2. the emergence of new
      players and business models, 3. the move away from bespoke services, and,
      finally, 4. the decomposition and 5. routinisation of professional
      work.<BaseCitation
        :work="literature['Susskind, Susskind']['Future of Professions']"
      ></BaseCitation>
    </p>
    <p>
      Conventional efforts to increase the efficiency of construction have
      focused on increasing the precision in the early design stages,
      effectively frontloading the design effort. There is a limit to this
      approach because it assumes a linear process, which design, a
      <BaseCitation
        :work="literature.Stefanescu['Digital Design Communication']"
        >wicked problem</BaseCitation
      >
      is not.
    </p>

    <figure>
      <picture> <img src="@/assets/paulsons-curve.jpg" /></picture>
      <figcaption>
        Paulson, Boyd C. 1976. “Designing to Reduce Construction Costs.” Journal
        of the Construction Division 102 (4)
        <a> Source </a>
      </figcaption>
    </figure>

    <h3>Organisations and Workflows: The process as the product</h3>

    <p>
      To react to these new forces, we have seen the emergence of highly
      specialised players, that address a narrow vertical slice of the market:
      Katerra, Nabr, and Gropyus for the residential market, WeWork for office
      spaces.
    </p>
    <p>
      Historically architecture firms have been horizontally organised: They
      would design single family homes to whole urban areas.
    </p>

    <figure>
      <img src="@/assets/davis-sawtooth.webp" />
      <figcaption>
        Sawtooth diagram by Phil Bernstein taken from Daniel Davis
      </figcaption>
    </figure>

    <figure style="display: flex; max-width: 30ch">
      <img src="@/assets/davis-horizontal.png" />
      <img src="@/assets/davis-vertical.png" />
      <figcaption>Daniel Davis</figcaption>
    </figure>

    <p>
      This is how Katerra and the likes address this problem. But I disagree.
      But I have only my intuition and nothing to back it up. Noell: Autismus
    </p>

    <blockquote>
      <BaseCitation :work="literature.Davis['Future of Professions']"
        >The move away from bespoke services represents a shift for the
        industry. In the past, many believed that mass-production was the key to
        efficiency, with the automotive and aeronautical industries often
        heralded as north stars. But attempts to standardize the output haven’t
        prevailed, with attention now shifting to focus on standardizing the
        process instead.</BaseCitation
      >
    </blockquote>

    <p>
      I would argue that standardising might not be the correct term here.
      Rather than towards standardisation, organisations should move towards
      viewing the process as part of their product. Not standardised, but
      constantly evolving with each artefact that is derived through it. The key
      is to be able to feed back learnings into a body of organisational
      knowledge, inscribed in different steps that make up the process.
    </p>

    <p>
      Automation / human-machine collaboration heißt auch, dass wir unseren
      Effort in den Teil der Wertschöpfung stecken können, wo wir meaningful
      impact hat. Vergleiche das neue digitale Handwerk, dass seine Produkte
      durch weitestgehend automatisierte Vertriebskanäle auf der ganzen Welt
      vertreibt. (Automation heißt aber auch, dass deren Werke effektiv kopiert
      werden, aber selbst hier gibt es ein positives Reading: So werden Ideen
      schnell möglichst vielen zugänglich gemacht.)
    </p>

    <OrganisationalKnowledge style="max-width: 30ch; margin-inline: auto" />
    <BaseCitation :work="literature.Witt['Machine Epistemology']" page="83"
      >This trust in machines, however, far from being an innocent conceit,
      represents an implicit belief in the possibility that collective memory
      and design knowledge can be instrumentally encapsulated in machines. It
      represents not a barrier to advancement of architectural knowledge but a
      great opportunity.</BaseCitation
    >

    <h3>Architects as Toolmakers</h3>
    <h4>Brunelleschi's Experiment</h4>

    <Comment
      >Architects have a history as toolmakers, tools are important to the
      discipline</Comment
    >

    <p class="introduction">
      Someday in the early 1400s Filippo Brunelleschi steps into the central
      portal of the cathedral of <em>S. Maria del Fiore</em>. With him he
      carries a contraption that he plans to demonstrate his latest invention
      with: A method to derive linear perspective.
    </p>
    <p>
      Brunelleschi has fashioned a plate depicting the Baptistery
      <em>San Giovanni</em>, as seen from the cathedral's portal, and a special
      mirror. What follows must be characterised as an exercise in situational
      comedy: Holding the plate to his forehead and the mirror in front of the
      plate, the Renaissance multi talent begins to carefully step from side to
      side as well as forward and backwards, peering through a sight-hole in the
      plate, his gaze firmly affixed on its reflection in the mirror.
    </p>
    <p>
      When he is satisfied, he holds still. It is only now that the ingenuity of
      the arrangement reveals itself. Positioned just so, the mirror's
      reflection of the plate fits perfectly into the rest of the scenery. The
      phenomenon is made even more obvious when he begins to move the mirror in
      and out of sight, alternating between the view of the baptistery on the
      plate and the real thing. The image on the plate matches the perception of
      the eye to a T.
    </p>

    <figure style="max-width: 40ch; margin-inline: auto">
      <picture
        ><img src="@/assets/brunelleschi-perspective-mirror.jpg"
      /></picture>
      <figcaption>
        Instrument to calculate scale and depth of observed objects, after
        Filippo Brunelleschi
        <a
          href="maitaly.wordpress.com/2011/04/28/brunelleschi-and-the-re-discovery-of-linear-perspective/"
        >
          Source
        </a>
      </figcaption>
    </figure>

    <p>
      We don't know if the scene really played out this way. But Brunelleschi is
      just one particularly prolific example of architects' long history as
      inventors of tools. His discovery<Footnote>Citation</Footnote> allowed
      architects to better anticipate and hence tune the spatial manifestation
      of their designs. Today, linear perspective is integral to the
      architectural process. Brunelleschi's masterpiece, the cupola of
      <em>S. Maria del Fiore</em> was erected with the help of
      <BaseCitation :work="literature.Witt['Machine Epistemology']" page="49"
        >specialised hoists, jigs, and lifts</BaseCitation
      >
      of his own design.
    </p>
    <p>
      The nineteenth century saw the invention of drafting apparatuses that
      allowed to produce ellipses and curves that would otherwise have required
      complicated geometrical constructions.<BaseCitation
        :work="literature.Witt['Machine Epistemology']"
        page="63"
      ></BaseCitation
      >Today, modern computer software lets users employ complex mathematical
      knowledge:<BaseCitation
        :work="literature.Lynn['Folding in Architecture']"
        page="11"
      />
      they can manipulate geometries, simulate physical phenomena, and draw
      insights from data using statistical and machine learning techniques. Mark
      Burry argues that scripting and parametric modelling can be described as a
      modern practice of toolmaking<BaseCitation
        :work="literature.Burry['Scripting Cultures']"
      ></BaseCitation>
    </p>

    <h4>Tools As Encapsulated Knowledge</h4>

    <Comment>Tools encapsulate knowledge</Comment>

    <p>
      In his essay "A Machine Epistemology", Andrew Witt shows that the body of
      architectural knowledge, the knowledge required to operate successfully in
      this field, can be divided into two sorts of knowledge: Design knowledge
      and instrumental knowledge.
    </p>
    <p>
      <em>Design knowledge,</em> according to Witt, includes the understanding
      of formal organisation principles such as proportions and hierarchies, the
      knowledge of the sensory and physical properties of materials and material
      combinations, as well as the mastery of geometric methods.
      <BaseCitation
        :work="literature.Witt['Machine Epistemology']"
        page="39"
      ></BaseCitation>
      While not specifically brought forward by the author, in can be argued
      that the understanding of the social, legal, and economic dimensions of
      architectural production and their interrelationships would also fall
      under this term.
    </p>
    <p>
      <em>Instrumental knowledge</em>, on the other hand, comprises the
      necessary know-how for the operation of technology in order to achieve a
      design goal. This can be the knowledge about the use of drawing tools, but
      also the ability to manipulate the user interface of a software.
      <BaseCitation
        :work="literature.Witt['Machine Epistemology']"
        page="41"
      ></BaseCitation>
      <Footnote
        >Witt's use of the term is in contrast to the way the term “instrumental
        knowledge” is used in the epistemology of science, for example: as a
        description of theories of predictive reliability (and thus
        instrumentality). Instead, in his sense instrumental knowledge is in
        fact an intentional knowledge of instrument operation.</Footnote
      >
    </p>

    <figure>
      <BaseImage src="adams-geometrical-and-graphical-essays.png" />
      <figcaption>
        Drawing instruments as Encapsulated Knowledge and the Instrumentation of
        Design. George Adams: Geometrical and Graphical Essays (1791)
        <a
          href="http://www.candidejournal.net/wp-content/uploads/downloads/2012/02/CAN03_Essay_Witt.pdf"
        >
          Source
        </a>
      </figcaption>
    </figure>

    <p>
      Tools embed and encapsulate knowledge. Design knowledge is captured in
      them and is thus accessible by means of instrumental
      knowledge.<BaseCitation
        :work="literature['Susskind, Susskind']['Future of Professions']"
        page="Susskind, Witt 41"
      ></BaseCitation>
      Using an ellipsograph, for example, it is possible to draw precise
      ellipses without knowing the individual steps involved in their
      geometrical construction. The knowledge may be limited to the instrumental
      knowledge to use the tool and, more importantly, the knowledge to identify
      when it is appropriate to draw an ellipse in the first place. Software
      such as <em>CAD</em> abstracts a variety of different geometric operations
      under a single interface paradigm. On the one hand, this allows to
      contextually minimise the information needed to perform an operation: A
      straight wall, drawn by hand at a scale of 1/100, requires four lines
      between four start or end points. Architectural <em>CAD</em> software only
      needs start and end points, and a thickness. On the other hand, it makes
      different, complex operations accessible under a common
      <BaseCitation
        :work="literature.Normann['Design of Everyday Things']"
        page="25"
        >conceptual model</BaseCitation
      >. For the user, this means that they can retrieve diverse captured
      knowledge via the same usage pattern. Tools thus have the potential to
      make their encapsulated knowledge
      <BaseCitation :work="literature.Witt['Machine Epistemology']" page="41"
        >accessible, communicable, repeatable, hackable, and
        transformable</BaseCitation
      >.
    </p>
    <p>
      Design and instrumental knowledge have a reciprocal relationship. They are
      mutually dependent. New design knowledge promotes the invention of new
      tools, which in turn stimulate the evolution of design knowledge.
      <BaseCitation
        :work="literature.Witt['Machine Epistemology']"
      ></BaseCitation>
    </p>

    <h4>Tool, Agency, and the Tyranny of the Default</h4>

    <h5>Skill and Scrutability</h5>

    <p>
      If tools encapsulate knowledge, then the question arises as to what extent
      they encroach on the autonomy and agency of the user. To what extent do
      they have to master the encapsulated knowledge to be able to use the tool
      in an empowered way? If they no longer know the exact individual
      operations that a tool performs, then they have limited capability to
      assess the result. They must rely on the tool. While the product of an
      ellipsograph is still fairly easy to verify, this is much more difficult
      with a function of a computer programme, which we often encounter as a
      black box and which, as such, eludes scrutiny. Even in the case of
      <a href="#open-source">open source software</a>, the correct function of
      which is verifiable in theory, such scrutiny often does not take place,
      which regularly results in widespread zero-day security vulnerabilities.
    </p>
    <p>
      Sufficiently advanced tools also run danger of causing deskilling
      <Footnote
        >In economics, deskilling is the process by which skilled labor within
        an industry or economy is eliminated by the introduction of technologies
        operated by semi- or unskilled workers. This results in cost savings due
        to lower investment in human capital, and reduces barriers to entry,
        weakening the bargaining power of the human capital.Braverman, Harry
        (1974) Labor and monopoly capital. New York: Monthly Review</Footnote
      >. Deskilling takes two forms: One is displacement by low-skilled actors,
      the other is the loss of skills of individuals or groups. Both dimensions
      are affected by tools. For example, automation tools allow complex tasks
      to be performed by less skilled individuals. The knowledge of a group of
      professionals can be lost if there is no longer a need to acquire the
      knowledge because tools make the encapsulated knowledge actionable without
      actually possessing it.
      <Comment
        >(But I argue for toolmaking to capture and evolve organisational
        knowledge?! -> tools must be scrutable)</Comment
      >
      <BaseCitation
        :work="literature.Witt['Machine Epistemology']"
      ></BaseCitation>
    </p>

    <h5>Hammers and Nails</h5>
    <p>
      Tools permit <em>uses</em> through <em>interactions</em>. They
      <BaseCitation
        :work="literature.Normann['Design of Everyday Things']"
        page="10"
        >afford</BaseCitation
      >
      them. Tools that offer multiple functionalities, such is the case with
      most digital tools, might not afford all uses equally easily, or might not
      signal all affordances to the same degree. This range of accessibility can
      have a conscious or subconscious effect on the user's actions and thus on
      the result itself. It's easier to do the easy thing, especially when
      <em>easy</em> masks as <em>obvious</em>. Or, as the proverb goes: "If your
      only tool is a hammer, every problem looks like a nail." The architectural
      flip side of such ill equipment are those buildings that seem to give away
      the CAD tool employed in their design.
    </p>
    <p>
      This is why especially in the case of digital tools, there is an aspect of
      curation to them. Paradigms and metaphors rarely capture all functionality
      equally well and must be chosen to best reflect the most common uses (or
      what the toolmaker considers them to be). As a result, functionality is
      unevenly accessible. An example is the popular geometry modelling software
      <em>Sketchup</em>. Its "push/pull" paradigm allows for easy generation of
      rectangular extrusions. Modelling nonrectilinear geometry is much more
      difficult and may require the masterful exploitation of the ideosyncracies
      inherent in the interface paradigm. Nevertheless, because of its undoubted
      strengths in modelling rectangular geometry, which comprises the lion's
      share of architectural form, it is often used, especially in early design
      phases.
    </p>
    <p>
      Tools exert
      <BaseCitation
        :work="literature['Thaler, Sunstein']['Nudge']"
        page="Thaler, Sunstein: Nudge. Where?"
        >default nudges</BaseCitation
      >, or to be more dramatic, the <em>Tyranny of the Default </em>. Consider
      the example of the wall in the preceding section. CAD software will
      usually not ask the designer to specify a thickness for the wall to draw,
      but instead fall back on a preset, a default. This removal of friction is
      a good thing since the parametric nature of the drawn wall allows to
      change its thickness to an appropriate width whenever the user learns more
      about their design. But they have to actively decide to do this. This
      requires cognitive effort: They have to decide <em>against</em> the
      thickness that the wall already has. If the wall looks vaguely right, they
      might leave it at that without giving it further thought.
    </p>

    <h5>Empowering tools</h5>

    <p>In conclusion: In order to empower, tools must be scrutable (-> open)</p>
    <p>Empower, rather than deskill, every tool is a hammer</p>
    <p>
      Weil Werkzeuge auch verstehbar sein müssen und hackable. Sonst sind wir
      den Werkzeugbauern ausgeliefert. Tools need to be hackable, but that might
      not fit here… Auf der anderen Seite: Gatekeeping und fehlende
      Produktpflege (-> Autodesk)
    </p>

    <p>
      Zumindest die Frage des was man beherrschen muss ist keine neue: Albert
      und Bruno.
    </p>

    <p>
      Die Argumente sind für mich kein Argument gegen die Maschine. Aber sie
      verdeutlichen dass wir uns in die Maschinengestehung aktiv einbringen
      müssen. Und nicht bloß Endanwender zu sein. Kann ich gerade nicht besser
      ausdrücken.
    </p>

    <p>
      -> Die Maschine stellt uns vor einen Konflikt: Sie greift unsere Autonomie
      an. (Und deswegen müssen wir als Disziplin an der Erfindung der Maschinen
      mitwirken!) Alles kurz noch mal erklären.
      <BaseCitation :work="literature.Witt['Machine Epistemology']" page="40" />
    </p>
    <p>
      Abstraktion wirft auch immer die Frage auf, inwiefern man das verkapselte
      Wissen trotzdem beherrschen muss, um die Werkzeuge mündig einzusetzen.
      Macht das Werkzeug uns unmündig? Kann man etwas einsetzen, was man nicht
      komplett versteht? (Ja natürlich, Entwerfen war schon immer
      Abstraktionsleistung, ich muss nicht die Thermodynamik ins letzte Quantum
      verstanden haben, um ein energetisch sinnvolles Gebäude zu entwerfen.) Im
      Gegenteil: Die Abstraktion macht es Architektinnen erst möglich, aus so
      weitläufigen Feldern zu synthetisieren, die Werkzeuge machen das möglich.
      Computer erlauben, diese Felder weiter auszudehnen und das ist im
      Angesicht neuer Problemfelder der Architektur auch notwendig. Abstraktion
      heißt auch nicht, dass man nichts mehr Wissen muss, es geht aber mehr um
      eine Essenz, den Takeaway. Instrumentenwissen ist auch nicht
      minderwertiger, als Entwurfswissen, da ein präzises Wissen um die
      Fähigkeiten und Limitationen von Werkzeugen zum einen vor einem
      unsachgemäßen Gebrauch schützen ("When all you have is a hammer, every
      problem looks like a nail"), zum anderen eröffnet ein solches Wissen
      Möglichkeiten des Hacking, des vordergründig missbräuchlichen Einsatzes,
      zum Erreichen eines Ziels, das bei der Erfindung des Werkzeugs noch gar
      nicht abgesehen worden war. Und dann Bruno vs Albert. Das habe ich noch
      nicht so richtig verstanden. Es geht irgendwie darum, inwiefern das
      Instrumentenwissen teil des Architekturwissens ist? Albert sagt no, Bruno
      sagt yes. Warum ist das relevant? Bruno halt integrierter, da wird auch
      das Werkzeug selber zum Forschungsgegenstand.
    </p>
    <p>
      Müsste hier auch noch etwas zu Gatekeeping kommen? Weil Werkzeuge auch
      verstehbar sein müssen und hackable. Sonst sind wir den Werkzeugbauern
      ausgeliefert.
    </p>
    <p>
      hier kommen wir wieder auf Brunelleschi, für dessen Zeitgenossen diese
      Frage durchaus bereits relevant war: Im Gegensatz zu B's integriertem
      Ansatz sagt Alberti
    </p>

    <p>
      The computer becomes, in effect, a resource for disciplinary organization.
      […] [D]esigners can now embed their knowledge of procedures and processes
      into software through programming, scripting, and rule- based design,
      essentially transforming design knowledge into instrumental knowledge
    </p>
    <p>
      As architects, we should be particular with our tools. Architects have a
      history as toolmakers. Tools encode / encapsulate
      <a>Design Knowledge</a> and make it
      <q>accessible, communicable, repeatable, hackable, and transformable</q>
      <cite>Witt</cite> to others. Through history, architects have built tools
      to encapsulate new domains of knowledge. Examples include the capture of
      new found knowledge about the perspective into an instrument to calculate
      the scale and depth of observed objects by Filippo Brunelleschi,
      mechanical drawing instruments from the nineteenth century, or
      <q>calculus-based mathematics encapsulated in computer software.</q>
      <cite>Greg Lynn / Witt</cite>
    </p>

    <p>
      <Footnote
        >Witt writes about in the context of complex geometry, but I argue that
        this applies to the whole [discipline | range of practice | ?]
      </Footnote>
    </p>

    <p>
      <Footnote
        >The most spectacular manifestation of Brunelleschi's integrated
        approach to architecture being the Florence Cathedral, erected with the
        help of specialised hoists, jigs, and lifts of the master's
        design.</Footnote
      >
      <comment
        >Other crumbs:
        <q>the reemerging role of the architect as the master builder</q>
        <q
          >As a result of their fundamental implications for organization
          knowledge management and productivity, knowledge encapsulation and the
          reuse of encapsulated knowledge have become key categories in
          epistemology of economics</q
        >
      </comment>
      <comment
        >Digital crafting (something, something, Mario Carpo (The Alphabet and
        the Algorithm?)) to remain empowered
      </comment>
      <comment> Example of architects as software devs? Gehry? </comment>
      <comment>
        See also: Gaudí: Catenary structures, Frei Otto: Soap Bubbles
      </comment>
      <comment>
        Missing still: Moving Design Knowledge to Instrumental Knowledge also
        means democratising
      </comment>
    </p>

    <h3>Towards an Internet of Construction</h3>

    <ul>
      <li>Networked, composable tooling</li>
      <li>(feeding into federated models, synced automatically via APIs)</li>
      <li>
        Highly specialised tools: Think Unix "one thing, but well" (tailored ->
        offsets "balkanisation" cost vs integrated environment)
      </li>
      <li>Products -> Services (functions, "workflows", Apps)</li>
      <li>
        organisational (design) knowledge put in services, developed in-house
        (closed source), or in public open-source models
      </li>
      <li>(accessible) Open Standards -> Interoperability</li>
      <li>
        focused services + open standards -> low barrier to market ->
        "innovation"
      </li>
      <li>
        build + iterate on (vertical) specialised toolchains / workflows ()
      </li>
    </ul>
    <p>To get there:</p>
    <ol>
      <li>accommodate incremental adoption (!!!)</li>
      <li>"data exchange layer", the "plumbing"</li>
      <li>Connect existing authoring applications</li>
      <li>easy automation to augment existing workflows</li>
      <li>Incremental unbundling of CAD supertankers</li>
      <li>Design Service Nirvana</li>
    </ol>

    <p>
      <Comment
        >Das ERLAUBT überhaupt in bessere Prozesse zu "investieren"</Comment
      >
    </p>

    <figure style="max-width: 50ch">
      <img src="@/assets/internet-of-construction.png" />
      <figcaption>Tom Bartley</figcaption>
    </figure>

    <!--     <figure style="max-width: 60ch">
      <img src="@/assets/bartley-api-request.png" />
      <figcaption>Tom Bartley</figcaption>
    </figure> -->

    <h3 id="open-source">Openness, collaboration, and Open Source</h3>
    <p>
      Architects would guard their skills as trade secrets
      <comment>(source ?)</comment>. Nowadays, this culture is still very
      prevalent. As a consequence, the push to digitalisation has led to the
      reinvention of the wheel many times over.
    </p>
    <p>
      Inspired by the open source culture in the creation of digital goods (?),
      there has been a recent development to adopt these practices in the AEC
      community. This is still in its infancy: OSARCH, BlenderBIM, Speckle.
      (Review Speckle Talk on this…)
    </p>

    <h2>My Slice of the Problem</h2>

    <figure>
      <img src="@/assets/speckle-in-one-minute.png" />
      <figcaption>
        Speckle as a the plumbing for the Internet of Construction
      </figcaption>
    </figure>
    <p>
      The world needs better buildings. We need to rapidly change how we make
      them. Climate Crisis, Resource Consumption, etc. Need to be sustainable,
      robust, resilient. Fast. There's many fronts to tackle here, and a lot is
      being done. There is one small area where I think I can make a
      contribution, and I want to work on the problem in the next five months.
      (phd dent graphic? "The Problem. My work")
    </p>
    <p>
      Sustainable, robust, and resilient buildings mean there's many more
      performance metrics to take into account. Carbon tracking, energy
      simulations, circularity, the list goes on.
    </p>
    <p style="display: none"><HumansVsComputers /></p>

    <h2>Prior Art</h2>
    <p>
      Home Assistant was included into the list due to it's connection with
      space (it's a home automation platform) and to see whether there was
      something to be learned from this connection to the built environment
    </p>
    <h3>Concepts</h3>
    <h4>Workflows</h4>
    <p>
      "A workflow consists of an orchestrated and repeatable pattern of
      activity" (Wikipedia)
    </p>
    <p>
      How is a YAML file different from a node based interface approach like
      Grasshopper or IFTTT? Is the former declarative, but the other is
      imperative? I think so?
    </p>
    <p>
      While tools are seldom pure incarnations of a concept, they usually lean
      more imperative, or more declarative.
    </p>

    <h4>Imperative</h4>
    <p>
      Atomic functions are chained together, usually via a visual node based
      interface. Explicit control flow. Grasshopper, Dynamo, Node Red, iOS
      Shortcuts.
    </p>
    <h4>Declarative</h4>
    <p>
      Tasks and conditions are declared, usually in YAML. While imperative
      approaches are well known in AEC thanks to Grasshopper and Dynamo, the
      problem at hand lends itself better to a declarative approach?
    </p>

    <h3>Products</h3>
    <h4>Argo CI</h4>
    <h4>Apache Airflow</h4>
  </main>
</template>
