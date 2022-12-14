import React from "react";
import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  Composition,
  Slot,
  createApiEnhancer,
  useCompositionInstance,
} from "@uniformdev/canvas-react";
import Navigation, { NavLink } from "./Navigation";
import Footer from "./Footer";

import './components';

export default function PageComposition({
  composition,
  navLinks,
}: {
  preview: boolean;
  composition: RootComponentInstance;
  navLinks: Array<NavLink>;
}) {
  const { composition: compositionInstance } = useCompositionInstance({
    composition,
    enhance: createApiEnhancer({
      apiUrl: "/api/preview",
    }),
  });
  const { metaTitle } = composition?.parameters || {};
  const title = metaTitle?.value as string;
  if (!composition) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation navLinks={navLinks} />
      {compositionInstance && (
        <Composition data={compositionInstance}>
          <Slot name="content" />
        </Composition>
      )}
      <Footer />
    </>
  );
}
