import React from "react";

import { range } from "@/utils";

import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

function VaporExerciseLoading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(12).map(() => (
          <LibraryGameCardSkeleton />
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
