
<script lang="ts">
  import { power } from "./store";
  let val_handler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    power.set(Number(target.value))
    
  }
</script>


<div class="index">
    <p class="label">Мощность:</p> 
    <p class="power">{$power}%</p>
    <input class="input" type="range" min="0" max="100" step="1" value={$power} on:change={val_handler}>
</div>

<style>
    .index{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-items: center;
        font-family:sans-serif;
        
    }
    .index .input {
        width: 150px;
    }
    .index .label {
        font-weight:600;
        font-size: 30px;
        margin: 30px;
    }
    .index .power {
        margin: auto;
        font-size: 50px;
        margin-bottom: 10px;
    }
</style>


