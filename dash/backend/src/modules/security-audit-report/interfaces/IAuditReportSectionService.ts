import {ClusterObjectSummary} from '../../cluster/dto/cluster-object-summary';
import {Content, TableCell} from 'pdfmake/interfaces';

export interface IAuditReportSectionService {
  /**
   * Will build the data for a single cluster, and return the
   * content to be included the cluster's section, and the row to be included the summary table for the tool
   * */
  buildClusterContent(cluster: ClusterObjectSummary): Promise<{ content: Content, summaryRow: TableCell[] }>;

  /** Takes an array of the summaryRows from buildClusterContent()
   * and builds the section to be included in the cluster overviews.
   * */
  buildSummaryContent(summaries: TableCell[][]): Content;
}