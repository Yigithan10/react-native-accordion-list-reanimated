import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AccordionListIcon from "./AccordionListIcon";
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AccordionItem = (props) => {
  const {
    item,
    bgColor,
    padding,
    marginVertical,
    marginHorizontal,
    borderRadius,
    borderWidth,
    borderColor,
    titleTextSize,
    titleTextColor,
    contentTextSize,
    contentTextColor,
    iconSize,
  } = props;

  const listRef = useAnimatedRef();
  const heightVal = useSharedValue(0);

  const isOpen = useSharedValue(false);

  const runAccordion = useDerivedValue(() =>
    isOpen.value ? withSpring(1) : withSpring(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      runAccordion.value,
      [0, 1],
      [0, heightVal.value],
      Extrapolate.CLAMP
    ),
  }));

  const handleAccordion = () => {
    if (heightVal.value === 0) {
      runOnUI(() => {
        "worklet";
        heightVal.value = measure(listRef).height;
      })();
    }

    isOpen.value = !isOpen.value;
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}
    >
      <Pressable
        style={[styles.titleContainer, { padding: padding }]}
        onPress={() => {
          handleAccordion();
        }}
      >
        <Text style={{ fontSize: titleTextSize, color: titleTextColor }}>
          {item.title}
        </Text>
        <AccordionListIcon runAccordion={runAccordion} iconSize={iconSize} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} style={styles.textContainer}>
          <View style={{ padding: padding }}>
            <Text
              style={{ fontSize: contentTextSize, color: contentTextColor }}
            >
              {item.text}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
});

export default AccordionItem;
