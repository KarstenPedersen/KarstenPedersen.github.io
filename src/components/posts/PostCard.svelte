<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";

  interface Props {
    id: string;
    title: string;
    description: string;
  }

  const { id, title, description }: Props = $props();
</script>

<Card.RootA href={`/posts/${id}`}>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Header>
  <Card.Footer>
    <p>Card Footer</p>
  </Card.Footer>
</Card.RootA>
