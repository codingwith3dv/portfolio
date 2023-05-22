<script setup lang="ts">
const { path } = useRoute();

const { data } = await useAsyncData(
  `content-${path}`,
  () => {
    return queryContent()
      .where({ _path: path })
      .findOne();
  }
);

const title = `${
  data.value.title as string
    ? `${data.value.title as string} | `
    : ''}Devesh Das`;
const image = 'https://deveshdas.vercel.app/favicon.png';

useSeoMeta({
  title,
  description: data.value.description as string,
  ogTitle: title,
  ogDescription: data.value.description as string,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: data.value.description as string,
  twitterImage: image,
  twitterCard: 'summary_large_image',
  twitterSite: '@cw3dv',
})

useHead({
  title,
  meta: [
    {
      name: "description",
      content: data.value.description as string,
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: data.value.description as string,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: data.value.description as string,
    },
    {
      name: "twitter:card",
      content: 'summary_large_image',
    },
    {
      name: "twitter:site",
      content: '@cw3dv',
    },
  ],
});
</script>

<template>
  <div max-w-2xl mx-auto p-4>
    <main
      class="prose"
      text="base md:3xl"
      >
      <ContentRenderer
        :value="data"
        >
        <ContentRendererMarkdown
          :value="data"
          />
      </ContentRenderer>
    </main>
  </div>
</template>
