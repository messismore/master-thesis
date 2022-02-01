<script lang="ts">
import { defineComponent } from 'vue'

import BrunelleschiMirror from '@/components/figures/BrunelleschiMirror.vue'
import Ellipsographs from '@/components/figures/Ellipsographs.vue'
import RhinoEllipse from '@/components/figures/RhinoEllipse.vue'
import SlideShow from '../components/SlideShow.vue'
import SlideContainer from '../components/SlideContainer.vue'
import SlideCover from '../components/slides/SlideCover.vue'

export default defineComponent({
  name: 'Prezo-2',
  components: {
    BrunelleschiMirror,
    Ellipsographs,
    RhinoEllipse,
    SlideShow,
    SlideCover,
    SlideContainer,
  },
  props: {},
  inject: ['theme'],
})
</script>

<template>
  <SlideShow>
    <SlideCover />

    <SlideContainer title="Aspiration">
      <ul>
        <li>This is an experiment / a case study</li>
        <li>
          Can designers still build and craft their own tools?<br />
          (-> Burry Scripting Cultures, but not limited to parametric models)
        </li>
        <li>Can we use them to store knowledge?</li>
        <li>Can we make this knowledge shareable?</li>
        <li>Can we develop new best practices?</li>
      </ul>
    </SlideContainer>

    <SlideContainer title="Context">
      <ul>
        <li>
          Trends Specific to Discipline
          <ul>
            <li>Performance Based Design</li>
            <li>Complexity</li>
            <li>Precision</li>
          </ul>
        </li>
        <li>
          Broader Trends: Reorganisation of Knowledge Work
          <ol>
            <li>Deliver more for less</li>
            <li>Move away from bespoke services</li>
            <li>Decomposition of professional work</li>
            <li>Routinisation of professional work</li>
          </ol>
        </li>
      </ul>
    </SlideContainer>

    <SlideContainer title="Focus on Process"
      >(Not sure if I need this)<br />
      <ul>
        <li>Davis: Apply modern Software Engineering Practices</li>
        <li>linear -> iterative, "agile"</li>
        <li>standardising output failed, standardise process instead</li>
        <li>systematise capture of new knowledge!</li>
      </ul>
    </SlideContainer>

    <SlideContainer
      title="Architects as toolmakers, tools as encapsulated knowledge"
    >
      <BrunelleschiMirror style="width: 60vw" />
    </SlideContainer>

    <SlideContainer
      title="Architects as toolmakers, tools as encapsulated knowledge"
    >
      <Ellipsographs style="width: 90vw" />
    </SlideContainer>

    <SlideContainer
      title="Architects as toolmakers, tools as encapsulated knowledge"
    >
      <RhinoEllipse style="width: 90vw" />
    </SlideContainer>

    <SlideContainer title="Speckle"
      >Speckle is the framework, the data transport layer
      <ul>
        <li>Translate Data from Authoring Applications</li>
        <li>Organise it in Streams that connect Apps</li>
        <li>
          Save metadata: Versions, Who changed the data, why was it changed,
          etc.
        </li>
        <li>We can use it to put automations on top!</li>
      </ul>
    </SlideContainer>

    <SlideContainer title="Case Studies">
      <ol>
        <li>Carbon Calculator</li>
        <li>Setback / Massing Checker</li>
        <li>Layout Tool: Bathrooms? Bike Racks? Bins?</li>
      </ol>
    </SlideContainer>

    <SlideContainer title="A Platform for Tools"
      >A Diagram / Wireframe showing:
      <ol>
        <li>The workflow composed of steps</li>
        <li>
          step by step what happens:
          <ol>
            <li>Update Stream</li>
            <li>Trigger Workflow</li>
            <li>Collect Data</li>
            <li>do something</li>
            <li>commit data onto different stream</li>
            <li>Speckle surfaces success/failure in UI</li>
            <li>Link to result / report</li>
          </ol>
        </li>
      </ol>
    </SlideContainer>

    <SlideContainer title="Case Study 1: Carbon Calculator">
      Explain Collaboration Process with specialist
    </SlideContainer>
    <SlideContainer title="Case Study 2: Setback / Massing">
      Diagram: Input -> Output
    </SlideContainer>
    <SlideContainer title="Case Study 3: Some Layout tool">
      Diagram: Input -> Output
    </SlideContainer>

    <SlideContainer title="Outlook"
      >Vertical Workflow linking FOCUSED design services:
      <ul>
        <li>Site Survey</li>
        <li>Simulations</li>
        <li>…</li>
        <li>CNC code generation</li>
      </ul>
    </SlideContainer>
    <SlideContainer title="Done and To do"
      ><ul>
        <li>✅ Subscribe to Stream Updates, specify a trigger event</li>
        <li>✅ Listen for trigger events</li>
        <li>
          ➡️ develop Actions:
          <ul>
            <li>Checkout</li>
            <li>Calculate Carbon Report</li>
            <li>Check Massing & Setback</li>
            <li>Generate Layout</li>
            <li>Commit Data</li>
          </ul>
        </li>
        <li>➡️ UI to display, compose, update, delete workflows</li>
      </ul>
    </SlideContainer>
  </SlideShow>
</template>
