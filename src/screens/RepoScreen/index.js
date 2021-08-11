import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { DetailedInfo, RepoHeader, Section } from "../../components";
import styles from "./styles";

function RepoScreen({ route }) {
  const { data } = route.params;
  const openRepoUrl = () => {
    Linking.openURL(data.html_url);
  };
  return (
    <>
      <RepoHeader
        containerStyle={styles.header}
        text={data.full_name}
        textStyle={styles.headerText}
        imageSrc={data.owner.avatar_url}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Section text={"Description"}>
          <Text style={styles.description}>{data.description}</Text>
        </Section>
        <Section text={"Additional Information"}>
          <View style={styles.row}>
            <DetailedInfo
              text={"Stars"}
              number={data.stargazers_count}
              iconName={"star"}
              iconColor={"#F8B703"}
              numberStyle={{ color: "#F8B703" }}
            />
            <DetailedInfo
              text={"Issues"}
              number={data.open_issues}
              iconName={"alert"}
              iconColor={"#DD1212"}
              numberStyle={{ color: "#DD1212" }}
            />
          </View>
          <View style={styles.row}>
            <DetailedInfo
              text={"Forks"}
              number={data.forks}
              iconName={"git-network"}
              iconColor={"#007500"}
              numberStyle={{ color: "#007500" }}
            />
            <DetailedInfo
              text={"Watchers"}
              number={data.watchers}
              iconName={"md-eye"}
              iconColor={"#052959"}
              numberStyle={{ color: "#052959" }}
            />
          </View>
        </Section>
        <Section text={"Repo Link"} containerStyle={{ borderBottomWidth: 0 }}>
          <TouchableOpacity style={styles.btn} onPress={openRepoUrl}>
            <Text style={styles.btnText}>{"Open Repo Link"}</Text>
          </TouchableOpacity>
        </Section>
      </ScrollView>
    </>
  );
}

export default RepoScreen;