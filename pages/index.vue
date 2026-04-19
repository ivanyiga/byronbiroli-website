<template>
  <div>
    <!-- HERO -->
    <section class="hero" aria-labelledby="hero-name">
      <p class="eyebrow reveal" id="hero-name">Byron Biroli</p>

      <p class="hero-lede reveal">
        Twenty years delivering technology infrastructure. UK telecoms migrating from legacy voice to IP,
        world-first immersive experiences for global audiences, a permanent cultural venue as national legacy,
        and now transaction-linked credit on Uganda's mobile money rails.
      </p>

      <p class="hero-role reveal">
        <strong>Founder and Managing Director, Sendu.</strong><br />
        Kampala.
      </p>
    </section>

    <!-- SENDU SUMMARY -->
    <AppSection title="Now" id="sendu-heading">
      <div class="sendu-card">
        <p>
          Sendu builds embedded banking infrastructure for Uganda's mobile money ecosystem. Transaction-linked
          credit embedded in the rails 33 million Ugandans already use every day.
        </p>
        <p>
          Five-product suite across payments, group savings, merchant till, float, and credit rating. Bank of
          Uganda PSP licensing in progress. First pilot in 2026.
        </p>
        <a href="https://sendu.ug" class="sendu-link" rel="noopener" target="_blank">
          Visit sendu.ug
          <span class="arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </AppSection>

    <!-- SELECTED WORK -->
    <AppSection title="Selected Work" id="work-heading">
      <!-- Work item 1: The Butterfly Trail -->
      <WorkItem
        title="The Butterfly Trail"
        videoUrl="https://www.youtube-nocookie.com/embed/QZXa8j7Ofc8"
      >
        World-first mixed reality experience at Outernet London, the UK's most visited attraction. Led as
        Originals Product Manager at Pixel Artworks. 6M+ annual visitors to the Now Building. 28M social
        views in the first month. Browser-based AR on a first-of-its-kind Unreal Engine and 8th Wall
        interface.
      </WorkItem>

      <!-- Work item 2: The Reel Store -->
      <WorkItem
        title="The Reel Store"
        videoUrl="https://www.youtube-nocookie.com/embed/soDlA0BlBLg"
      >
        UK's first permanent digital art gallery. Led as Digital Producer at Coventry UK City of Culture.
        800m² projection canvas, 14 4K laser projectors, spatially adaptive sound. Programmed two UK
        premiere exhibitions: Machine Memoirs: Space by Refik Anadol, and the Life and Work of Frida Kahlo.
      </WorkItem>
    </AppSection>

    <!-- CAREER TIMELINE -->
    <AppSection title="Career" id="career-heading">
      <ol class="timeline">
        <TimelineEntry
          period="2025 — Present"
          org="Sendu"
          title="Founder and Managing Director"
        >
          Embedded banking infrastructure for Uganda's mobile money ecosystem. Five-product suite across
          payments, group savings, merchant till, float, and credit rating. Bank of Uganda PSP licensing
          in progress. First pilot in 2026.
        </TimelineEntry>

        <TimelineEntry
          period="2023 — 2025"
          org="Pixel Artworks"
          title="Product Manager, Originals"
        >
          Led Pixel Artworks' $200M Originals portfolio. Delivered The Butterfly Trail at Outernet London,
          the UK's most visited attraction. World-first mixed reality experience. 6M+ annual visitors to
          the Now Building. 28M social views in the first month. Browser-based AR on a first-of-its-kind
          Unreal Engine and 8th Wall interface.
        </TimelineEntry>

        <TimelineEntry
          period="2020 — 2023"
          org="Coventry City of Culture Trust"
          title="Digital Producer"
        >
          Led as Digital Producer on The Reel Store, the UK's first permanent digital art gallery. 800m²
          projection canvas, 14 4K laser projectors, spatially adaptive sound. Programmed two UK premiere
          exhibitions: Machine Memoirs: Space by Refik Anadol, and the Life and Work of Frida Kahlo.
        </TimelineEntry>

        <TimelineEntry
          period="2016 — 2020"
          org="Ouchhh"
          title="Technical Producer"
        >
          Delivered data-driven immersive installations for international clients. DataGate: custom data
          visualisations of CERN Large Hadron Collider and NASA Hubble Space Telescope datasets.
        </TimelineEntry>

        <TimelineEntry
          period="2012 — 2016"
          org="Independent"
          title="Touring Musician"
        >
          Self-managed international touring and recording operation. Press coverage in
          <a
            href="https://earmilk.com/2018/09/07/take-a-journey-with-byron-biroli-in-his-latest-visual-for-find-a-way/"
            class="inline-link"
            rel="noopener"
            target="_blank"
            >Earmilk</a
          >
          and others.
        </TimelineEntry>

        <TimelineEntry
          period="2006 — 2012"
          org="Cable and Wireless Communications"
          title="Business Analyst"
        >
          Wrote Business Requirement Documents and led systems integration for IP migration on Government
          Secure Intranet (GSi) and the Public Services Network (PSN). Bridged legacy phone systems to new
          IP infrastructure, migrating thousands of corporate phone numbers with continuous service. Moved
          corporate clients from call-centre channels to self-service portals. Unified communications and
          early cloud.
        </TimelineEntry>
      </ol>
    </AppSection>

    <!-- EDUCATION -->
    <AppSection title="Education" id="education-heading">
      <div class="timeline">
        <TimelineEntry
          period="Goldsmiths, University of London"
          org="Goldsmiths, University of London"
          title="MFA Computational Arts"
          variant="education"
        >
          C++, Python, physical computing, machine learning.
        </TimelineEntry>
      </div>
    </AppSection>

    <!-- CONTACT FOOTER -->
    <ContactFooter />
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  padding-top: var(--space-10);
  padding-bottom: var(--space-9);
}

/* SENDU SUMMARY */
.sendu-card {
  padding: var(--space-6);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  max-width: 620px;
}

.sendu-card p {
  color: var(--color-fg-muted);
  font-size: 0.9375rem;
  line-height: 1.75;
  margin-bottom: var(--space-4);
}

.sendu-card p:last-child {
  margin-bottom: 0;
}

.sendu-card .sendu-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  text-decoration: none;
}

.sendu-card .sendu-link:hover {
  color: var(--color-accent);
}

.sendu-card .sendu-link .arrow {
  transition: transform 180ms var(--ease-out);
}

.sendu-card .sendu-link:hover .arrow {
  transform: translateX(3px);
}

/* TIMELINE (List reset) */
.timeline {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
