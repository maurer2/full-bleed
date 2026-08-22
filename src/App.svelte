<script lang="ts">
</script>

<!-- <header class="mx-auto max-w-3xl px-4 py-10">
  <h1 class="text-2xl font-semibold text-neutral-900">Home</h1>
  <p>Text</p>
</header> -->
<main class="my-normal flex flex-col gap-normal grid-lines-vertical">
  <section class="grid-container-subgrid">
    <div class="grid-container-subgrid-row bg-brand-complementary py-normal">
      <h2 class="text-xl font-bold text-brand-complementary-contrast">
        Full bleed via grid and subgrid
      </h2>
    </div>
    <div class="grid-container-subgrid-row-full-bleed bg-brand">
      <div class="grid-container-subgrid-row py-normal">
        <p class="text-lg text-brand-contrast">Full bleed</p>
      </div>
    </div>
    <div class="grid-container-subgrid-row bg-brand-complementary py-normal">
      <p class="text-lg text-brand-complementary-contrast">Normal</p>
    </div>
  </section>
  <section class="grid-container-query">
    <div class="grid-container-query-row bg-brand-complementary py-normal">
      <h2 class="text-xl font-bold text-brand-complementary-contrast">
        Full bleed via container query units
      </h2>
    </div>
    <div class="grid-container-query-row-full-bleed bg-brand">
      <div class="grid-container-query-row py-normal">
        <p class="text-lg text-brand-contrast">Full bleed</p>
      </div>
    </div>
    <div class="grid-container-query-row bg-brand-complementary py-normal">
      <p class="text-lg text-brand-complementary-contrast">Normal</p>
    </div>
  </section>

  <section class="grid-container-border-shape">
    <div class="bg-brand-complementary grid-container-border-shape-row py-normal">
      <h2 class="text-xl font-bold text-brand-complementary-contrast">
        Full bleed via border-shape and border-color
      </h2>
    </div>
    <div class="border-brand grid-container-border-shape-row-full-bleed py-normal">
      <p class="text-lg text-brand-contrast">Full bleed</p>
    </div>
    <div class="bg-brand-complementary grid-container-border-shape-row py-normal">
      <p class="text-lg text-brand-contrast">Normal</p>
    </div>
  </section>

  <div class="test">
    <div class="test-random-element">
      <div class="test1">Test1 (eager evaluation)</div>
      <div class="test2">Test2 (lazy evaluation)</div>
    </div>
  </div>

</main>
