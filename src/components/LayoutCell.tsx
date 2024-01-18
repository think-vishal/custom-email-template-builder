import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Popover, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import LayoutCellItem from "./LayoutCellItem";
import { useDispatch } from "react-redux";
import { removeLayout } from "../actions/layoutActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeContentItem } from "../actions/contentActions";

interface LayoutCellProps {
  layoutId: number;
  layoutType: string;
  columnWidth: number;
}

const LayoutCell: React.FC<LayoutCellProps> = ({
  layoutId,
  layoutType,
  columnWidth,
}) => {
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const contentItems = useSelector((state: any) => state.contents.contentItems);

  const generalStyles = useSelector(
    (state: any) => state.generalStyles.generalStyles
  );

  console.log("generalStyles: ", generalStyles)

  const hasContent = contentItems.some(
    (item: any) => item.layoutId === layoutId
  );

  const contents = contentItems.filter(
    (item: any) => item.layoutId === layoutId
  );

  console.log("content: ", contents);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CONTENT_ITEM",
    drop: (item, monitor) => {
      console.log("Executed", generalStyles);
      return {
        layoutId: layoutId,
        styles: generalStyles,
      };
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const renderCellContent = () => {
    if (!hasContent) {
      return "Drop Content Here";
    }

    return contentItems.map((item: any, index: number) => {
      if (item.layoutId === layoutId) {
        return <LayoutCellItem key={index} item={item} />;
      }
      return null;
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleRemoveLayout = () => {
    dispatch(removeLayout(layoutId));
    contents.forEach((item: any) => {
      dispatch(removeContentItem(layoutId, item.id));
    });
    setAnchorEl(null);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid ref={drop} item xs={columnWidth}>
      <Box
        onClick={handleClick}
        style={{
          border: `2px ${hovered ? "solid #7ea5f5" : isOver ? "dashed blue" : "none"}`,
          padding: "20px",
          textAlign: "center",
          background: hasContent ? "none" : "#4086f8",
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {renderCellContent()}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <IconButton aria-label="delete" onClick={handleRemoveLayout}>
          <DeleteIcon />
        </IconButton>
      </Popover>
    </Grid>
  );
};

export default LayoutCell;
