<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLAnchorElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
	export let href: string = "";
</script>

<a href={href}
	class={cn("block bg-card text-card-foreground rounded-lg border shadow-sm", className)}
	{...$$restProps}
>
	<slot />
</a>
