<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Card</h1>

    <p>Cards are used to group and display content in a way that is easily readable.</p>

    <component-preview>
      <template #title>Card</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #cover>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Compact card (less padding for `card-body`)</template>

      <ui-card class="w-96 bg-base-100 shadow-xl" compact>
        <template #cover>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with badge</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #cover>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>
          Shoes!
          <ui-badge color="secondary">NEW</ui-badge>
        </template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <ui-badge outline>Fashion</ui-badge>
          <ui-badge outline>Products</ui-badge>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with bottom image</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #cover-bottom>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with centered content and paddings</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #cover>
          <div class="px-10 pt-10">
            <img src="/img/shoe.jpg" alt="Shoes" class="rounded-xl" />
          </div>
        </template>

        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with image overlay</template>

      <ui-card class="w-96 bg-base-100 shadow-xl" cover-overlay>
        <template #cover>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card without image</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with custom color</template>

      <ui-card class="w-96 bg-primary text-primary-content">
        <template #title>Shoes!</template>

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <template #actions>
          <button class="btn">Buy Now</button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with neutral color</template>

      <ui-card
        class="w-96 bg-neutral text-neutral-content"
        body-class="items-center text-center"
      >
        <template #title>Cookies!</template>

        <p>We are using cookies for no reason.</p>

        <template #actions>
          <ui-button color="primary">Accept</ui-button>
          <ui-button color="ghost">Deny</ui-button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with action on top</template>

      <ui-card class="w-96 bg-base-100 shadow-xl">
        <template #title>
          Cookies!
          <ui-button class="ml-auto" size="sm" square>
            <ui-icon name="x-lg" />
          </ui-button>
        </template>

        <p>We are using cookies for no reason.</p>
      </ui-card>
    </component-preview>

    <component-preview with-background>
      <template #title>Card glass</template>

      <ui-card class="w-96 glass">
        <template #cover>
          <img src="/img/shoe.jpg" alt="Shoes" />
        </template>

        <template #title>Life hack</template>

        <p>How to park your car at your garage?</p>

        <template #actions>
          <ui-button color="primary">Learn now!</ui-button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with image on side</template>

      <ui-card class="bg-base-100 shadow-xl" cover-aside>
        <template #cover>
          <img src="/img/spiderman.jpg" alt="Movie" />
        </template>

        <template #title>New movie is released!</template>

        <p>Click the button to watch on Jetflix app.</p>

        <template #actions>
          <ui-button color="primary">Watch</ui-button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title>Card with image on right side</template>
      <template #description>
        This is a combination of cover-bottom slot and cover-aside flag.
      </template>

      <ui-card class="bg-base-100 shadow-xl" cover-aside>
        <template #cover-bottom>
          <img src="/img/spiderman.jpg" alt="Movie" />
        </template>

        <template #title>New movie is released!</template>

        <p>Click the button to watch on Jetflix app.</p>

        <template #actions>
          <ui-button color="primary">Watch</ui-button>
        </template>
      </ui-card>
    </component-preview>

    <component-preview>
      <template #title
        >Responsive card (vertical on small screen, horizontal on large screen)</template
      >

      <ui-card class="lg:card-side bg-base-100 shadow-xl">
        <template #cover>
          <img src="/img/casette.jpg" alt="Album" />
        </template>

        <template #title>New album is released!</template>

        <p>Click the button to listen on Spotiwhy app.</p>

        <template #actions>
          <ui-button color="primary">Listen</ui-button>
        </template>
      </ui-card>
    </component-preview>
  </div>
</template>
