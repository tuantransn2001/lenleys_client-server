import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import Button from "~/components/helpers/Button/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      onNodeSelect={(e, nodeId) => {
        console.log(nodeId);
      }}
    >
      <TreeItem nodeId="1" label="Product Management">
        <TreeItem nodeId="2" label="Products View" />
        <TreeItem nodeId="3" label="Edit Product" />
        <TreeItem nodeId="4" label="Delete Product" />
      </TreeItem>
    </TreeView>
  );
}
