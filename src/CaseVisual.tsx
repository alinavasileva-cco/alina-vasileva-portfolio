import type { CaseItem } from "./content";
import AutomationVisual from "./AutomationVisual";
import GrowthVisual from "./GrowthVisual";
import FunnelVisual from "./FunnelVisual";
import PipelineVisual from "./PipelineVisual";

export default function CaseVisual({ type }: { type: CaseItem["visual"] }) {
  if (type === "automation") return <AutomationVisual />;
  if (type === "growth") return <GrowthVisual />;
  if (type === "funnel") return <FunnelVisual />;
  return <PipelineVisual />;
}
