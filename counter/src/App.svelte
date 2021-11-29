<script>
  let count = 0;
</script>
<section>
  <button class="counter-button" on:click={() => { count += 1; }}>{count}</button>
</section>
<style>
  section {
    font-size: 1.5rem;
  }
  .counter-button {
    background-color: #fff;
    padding: 13px 28px;
    border: 1px solid #cccccc;
    border-radius: 0;
    color: #231f20;
  }
  .counter-button:hover {
    cursor: pointer;
    opacity: .7;
  }
  .counter-button:active {
    opacity: .8;
    transition: opacity .15s ease-out;
    outline-offset: 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
  .counter-button:focus-visible {
    outline-offset: 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
</style>
