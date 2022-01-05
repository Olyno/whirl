<script lang="ts">
  import Atropos from 'atropos/svelte';
  import Select from 'svelte-select';
  import clipboard from './actions/clipboard';
  import Navbar from './components/Navbar.svelte';
  import { selectedAnimation } from './stores';
  import { multi, pseudo, single } from './whirl.config.json';

  const addCategory = category => whirl => ({ ...whirl, category });
  const whirlsList = pseudo
    .map(addCategory('pseudo'))
    .concat(multi.map(addCategory('multi')))
    .concat(single.map(addCategory('single')));
  const getRandomWhirl = () =>
    whirlsList[Math.floor(Math.random() * whirlsList.length)];
  const selectRandom = () => ($selectedAnimation = getRandomWhirl());

  selectedAnimation.subscribe(whirl => {
    import(`./whirls/${whirl.name}.scss`);
  });
</script>

<main
  class="flex justify-center items-center w-full h-screen bg-primary flex-col gap-10"
>
  <Navbar />

  <h1 class="text-white text-5xl font-bold">Whirl</h1>
  <h2 class="text-white text-xl">
    CSS loading animations with minimal effort!
  </h2>

  <div
    class="w-75 h-75"
    data-clipboard-text={$selectedAnimation.className}
    use:clipboard
  >
    <Atropos class="w-full h-full">
      <div
        class="w-full h-full bg-secondary rounded-md flex justify-center items-center"
      >
        <div
          class={$selectedAnimation.className +
            ' flex justify-center items-center'}
        >
          {#each new Array($selectedAnimation.requiredElements).fill(null) as element}
            <div />
          {/each}
        </div>
      </div>
    </Atropos>
  </div>
  <Select
    containerClasses="w-75 h-full"
    placeholder="Find a whirl animation..."
    items={whirlsList.map(whirl => {
      return {
        value: whirl,
        label: whirl.name,
        group: whirl.category,
      };
    })}
    groupBy={item => item.group}
    on:select={e => ($selectedAnimation = e.detail.value)}
  />
  <button
    on:click={selectRandom}
    class="bg-secondary rounded-md w-75 h-10 text-white hvr-float"
  >
    Discover a new one!
  </button>
</main>
