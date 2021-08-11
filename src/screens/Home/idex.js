import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { RepoHeader, RepoCard } from "../../components";
import { getAllRepos } from "../../services";
import styles from "./styles";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const _onLoad = async () => {
    const _data = await getAllRepos(page);
    setData([...data, ..._data]);
    setLoading(false);
  };

  useEffect(() => {
    _onLoad();
  }, [page]);

  const renderItem = (data) => {
    return (
      <RepoCard
        key={data.item.id}
        title={data.item.full_name}
        description={data.item.description}
        imageSrc={data.item.owner.avatar_url}
        issuesNumber={data.item.open_issues}
        providerName={data.item.owner.login}
        starsNumber={data.item.stargazers_count}
        numberOfLines={1}
      />
    );
  };

  const increasePageNumber = () => {
    setLoading(true);
    setPage((val) => val + 1);
  };

  return (
    <>
      <RepoHeader text={"All repositories"} />
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={increasePageNumber}
        onEndReachedThreshold={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      {loading && <ActivityIndicator />}
    </>
  );
}

export default Home;