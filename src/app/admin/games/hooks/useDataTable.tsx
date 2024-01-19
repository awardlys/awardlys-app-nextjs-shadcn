import { fetchGames, createGame, updateGame } from "@/services/http/games";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { columns } from "../components/columns";
import { useStoreGame } from "../store";
import { CreateOrUpdateGame, Game } from "@/types";

export function useDataTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const {
    setModalOpen,
    games,
    modalOpen,
    setTryAgain,
    gamesEdit,
    setGamesEdit,
    setGames,
    loading,
    setLoading,
    tryAgain,
  } = useStoreGame();
  useEffect(() => {
    if (tryAgain) {
      return;
    }
    setLoading(true);
    fetchGames()
      .then((res) => {
        const data = res.map((item) => ({
          ...item,
          createdAt: dayjs(item.createdAt).format("DD/MM/YYYY"),
          updatedAt: dayjs(item.updatedAt).format("DD/MM/YYYY"),
        }));
        setGames(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
        setTryAgain(true);
      });
  }, [setGames, setLoading, setTryAgain, tryAgain]);
  const table = useReactTable({
    data: games,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
    },
  });
  async function onSubmit(values: CreateOrUpdateGame) {
    if (gamesEdit?.id) {
      updateGame(gamesEdit.id, values)
        .then()
        .catch()
        .finally(() => {
          setTryAgain(false);
          setModalOpen(false);
        });
      setGamesEdit(null);
    } else {
      const res = await createGame(values);
      if (!res) return;
      setTryAgain(false);
      setModalOpen(false);
    }
  }
  return { table, loading, modalOpen, setModalOpen, onSubmit };
}
