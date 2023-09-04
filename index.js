import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AccordionItem from "./components/AccordionItem";

const AccordionList = (props) => {
  let data = props.data;
  let bgColorContain = props.bgColorContain;
  let bgColor = props.bgColor;
  let padding = props.padding;
  let marginVertical = props.marginVertical;
  let marginHorizontal = props.marginHorizontal;
  let borderRadius = props.borderRadius;
  let borderWidth = props.borderWidth;
  let borderColor = props.borderColor;
  let titleTextSize = props.titleTextSize;
  let titleTextColor = props.titleTextColor;
  let contentTextSize = props.contentTextSize;
  let contentTextColor = props.contentTextColor;
  let iconSize = props.iconSize;

  if (data == undefined) {
    data = [
      {
        title: "Please give data",
        text: "Please give data",
      },
    ];
  }

  if (bgColorContain == undefined) {
    bgColorContain = "#FFF";
  }

  if (bgColor == undefined) {
    bgColor = "#DEE2E6";
  }

  if (padding == undefined) {
    padding = 10;
  }

  if (marginVertical == undefined) {
    marginVertical = 4;
  }

  if (marginHorizontal == undefined) {
    marginHorizontal = 8;
  }

  if (borderRadius == undefined) {
    borderRadius = 10;
  }

  if (borderWidth == undefined) {
    borderWidth = 0.5;
  }

  if (borderColor == undefined) {
    borderColor = "black";
  }

  if (titleTextSize == undefined) {
    titleTextSize = 18;
  }

  if (titleTextColor == undefined) {
    titleTextColor = "black";
  }

  if (contentTextSize == undefined) {
    contentTextSize = 15;
  }

  if (contentTextColor == undefined) {
    contentTextColor = "black";
  }

  if (iconSize == undefined) {
    iconSize = 24;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: bgColorContain }]}
    >
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          bgColor={bgColor}
          padding={padding}
          marginVertical={marginVertical}
          marginHorizontal={marginHorizontal}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
          borderColor={borderColor}
          titleTextSize={titleTextSize}
          titleTextColor={titleTextColor}
          contentTextSize={contentTextSize}
          contentTextColor={contentTextColor}
          iconSize={iconSize}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccordionList;
