<script lang="ts">
    import LightSwitch from "$lib/components/utils/LightSwitch.svelte";
</script>

<header class="content-grid py-4">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div class="flex items-center gap-2">
            <a href="/" class="no-underline font-semibold text-2xl">
                Karsten Pedersen
            </a>
            <LightSwitch />
        </div>
        <div class="flex justify-between items-center gap-4">
             <nav aria-label="Main Menu">
                <ul
                    class="flex items-center gap-x-4 list-none flex-wrap"
                >
                    <li>
                        <a href="/archive" class="underline">Archive</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
