'use client';

import { RunDetailsV3 } from '@inngest/components/RunDetailsV3/RunDetailsV3';
import { useSearchParam } from '@inngest/components/hooks/useSearchParam';
import { cn } from '@inngest/components/utils/classNames';

import { useGetRun } from '@/hooks/useGetRun';
import { useGetTraceResult } from '@/hooks/useGetTraceResult';
import { useGetTrigger } from '@/hooks/useGetTrigger';

export default function Page() {
  const [runID] = useSearchParam('runID');
  const getRun = useGetRun();
  const getTraceResult = useGetTraceResult();
  const getTrigger = useGetTrigger();

  if (!runID) {
    throw new Error('missing runID in search params');
  }

  return (
    <div className={cn('bg-canvasBase overflow-y-auto pt-8')}>
      <RunDetailsV3
        standalone
        getResult={getTraceResult}
        getRun={getRun}
        getTrigger={getTrigger}
        pollInterval={2500}
        runID={runID}
      />
    </div>
  );
}
