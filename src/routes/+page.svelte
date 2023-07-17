<script>
    export let data;
    let selected = "";

    async function onSubmit(e) {
        const url =
            "https://newticket20230717111414.azurewebsites.net/api/new_ticket";
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
        
        window.location.reload(true) 
    }
</script>

<main>
    <div class="header">
        <h1>HomeFix Solutions</h1>
        <h2>Ticketing service</h2>
    </div>
    <form on:submit|preventDefault={onSubmit}>
        <p>Scegli l'intervento:</p>
        <select name="type" id="types" , value={selected}>
            {#each data.list as el}
                <option value={el.id}
                    >{el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                </option>
            {/each}
        </select>
        <input bind:value={selected} class="hidden" />
        <p>Inserisci il tuo indirizzo:</p>
        <input name="address" type="text" />
        <p>Inserisci la richiesta:</p>
        <input name="desc" type="text" />
        <button>Invia</button>
    </form>
</main>

<style>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        width: 100%;
        background-color: #00ccdd;
    }
    .hidden {
        display: none;
    }
    form {
        display: flex;
        flex-direction: column;
        width: max-content;
    }
</style>
