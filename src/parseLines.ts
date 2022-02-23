import { parseText } from "./parseText";
import { ContextsMap, LineType, ParsedLine } from "./types";

export const parseLines = (
  lines: LineType[],
  contextsMap: ContextsMap,
): ParsedLine[] => {
  if (lines.length === 0) return [];

  const [targetLine, ...restLines] = lines;
  const [result, newContextMap] = parseLine(targetLine, contextsMap);
  return [result, ...parseLines(restLines, newContextMap)];
};

const parseLine = (line: LineType, contextsMap: ContextsMap): [ParsedLine, ContextsMap] => {
  const blocks = parseText(line.text, contextsMap);
  return [{ id: line.id, blocks }, contextsMap];
};
